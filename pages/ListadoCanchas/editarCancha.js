import React, { useState, useEffect, useContext } from 'react';
import { Alert, Text, View, TextInput, Button, TouchableHighlight, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Octicons';
import GlobalContext from '../../components/context';

import BotoneraSuperior from '../../components/botoneraSuperior';
import s from '../../components/styles'


const Cancha = ({ route }) => {
    const context = useContext(GlobalContext);
    const { cancha } = route.params
    const [numero, setNumero] = useState(cancha.numero.toString());
    const [precio, setPrecio] = useState(cancha.precio.toString());
    const [tipoElegido, setTipoElegido] = useState(cancha.descripcion)
    const [tipos, setTipos] = useState([]);

    const [puedeEnviar, setPuedeEnviar] = useState(false)
    const ip = 'https://secret-shore-39623.herokuapp.com/';
    const navigation = useNavigation();



    // Validacion de boton enviar
    useEffect(() => {

        setPuedeEnviar(numero != "" && tipoElegido != '0' && precio != "")

    }, [tipoElegido, numero, precio])

    async function guardarCancha() {

        if (puedeEnviar) {

            //Conformación de componentes para el fetch
            const headers = new Headers();
            headers.append("Content-type", "application/json")

            const requestOptions = {
                method: "PUT",
                headers: headers,
                // headers: {'Authorization': `Bearer ${context.token}`},
                body: JSON.stringify({
                    id: cancha._id,
                    descripcion: tipoElegido,
                    numero: numero,
                    precio: precio,
                })
            }

            //Almacenamos el response del fetch
            let response = await fetch(ip + 'api/canchas/' + cancha.id, requestOptions)
                .then((res) => res.json())
                .catch(err => {
                    console.log("Error: ", err)
                })
            console.log(response)
            //Dependiendo el response, mostramos un msj    
            if (!response) {
                console.log("No se pudo modificar.")
                Alert.alert('Error',"No se pudo modificar.")
            } else {
                Alert.alert("Los datos se modificaron con éxito.")
                navigation.navigate("Listado Canchas")
            }

        } else {
            //Mensaje de error cuando falta algún campo o hay algún campo inválido
            Alert.alert(
                "Error",
                "¡Revisar los campos completados!",
                [{
                    text: "Cancelar",
                    onPress: console.log('Yes Pressed'),
                }]
            )
        }

    }


    useEffect(() => {

        const headers = new Headers();
        headers.append("Content-type", "application/json")
        //adaptar con ip de la compu que ejecute: http://ip:3000/api...
        const requestOptions = {
            method: "GET",
            headers: headers,
            // headers: {'Authorization': `Bearer ${context.token}`},
        }
        fetch(ip + 'api/tipocancha/', requestOptions)
            .then((response) => response.json())
            .then((json) => setTipos(json))
            .catch((error) => console.error(error));
    }, []);


    return (
        <ScrollView style={s.container}>
            <BotoneraSuperior />
            <View style={s.contenedorSubtitulo}>
                <Text style={s.subtituloAdmin} >Editar cancha</Text>
            </View>
            <View style={s.containerIngreso}>
                <Text style={s.dato}>Número de cancha</Text>
                <TextInput
                    style={s.input}
                    editable={false}
                    value={numero}
                />
                <Text style={s.dato}>Precio de reserva</Text>
                <TextInput
                    style={s.input}
                    value={precio}
                    placeholder="Precio"
                    onChangeText={(texto) => setPrecio(texto)}
                    keyboardType="numeric"
                />
                <View style={s.contenedorPicker}>
                    <Picker
                        selectedValue={tipoElegido}
                        style={s.picker}
                        onValueChange={(itemValue, itemIndex) => setTipoElegido(itemValue)}
                    >
                        <Picker.Item label="Seleccionar tipo de cancha" value="0" />
                        {tipos.map((item, key) => (
                            <Picker.Item label={item.descripcion} value={item.descripcion} key={key} />)
                        )}
                    </Picker>
                </View>

                <View style={s.botoneraInferior}>
                    <Icon
                        name='x'
                        size={40}
                        color='#000'
                        style={s.iconoDerecho}
                        onPress={() => navigation.goBack()}
                    />
                    <Icon
                        name='check'
                        size={40}
                        color='#000'
                        style={s.iconoIzquierdo}
                        onPress={() => guardarCancha()}
                    />
                </View>

            </View>

        </ScrollView>
    )
}

export default Cancha;
