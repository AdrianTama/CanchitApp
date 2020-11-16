import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, TouchableHighlight, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';

import BotoneraSuperior from '../components/botoneraSuperior';
import s from '../components/styles';
import { ScrollView } from 'react-native-gesture-handler';


const AgregarCancha = () => {

    const [numero, setNumero] = useState("");
    const [descripcion, setDescripcion] = useState("0");
    const [precio, setPrecio] = useState("");

    const [puedeEnviar, setPuedeEnviar] = useState(false)
    const navigation = useNavigation();
    const ip = 'https://secret-shore-39623.herokuapp.com/';
    // Validacion de boton enviar
    useEffect(() => {

        setPuedeEnviar(numero != "" && descripcion != '0' && precio !="")

    }, [descripcion, numero, precio ])

    async function guardarCancha() {

        if (puedeEnviar) {

            //Conformación de componentes para el fetch
            const headers = new Headers();

            headers.append("Content-type", "application/json")

            const requestOptions = {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    descripcion : descripcion,
                    numero : numero,
                    precio : precio
                })
            }

            //Almacenamos el response del fetch
            let response = await fetch(ip + 'api/canchas/agregarCanchas', requestOptions)
                .then((res) => res.json())
                .catch(err => {
                    console.log("Error: ", err)
                })
            //Dependiendo el response, mostramos un msj    
            if (response === undefined) {
                Alert.alert("Error", "La cancha ya existe")
            } else {
                Alert.alert("La cancha se agregó con éxito")
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

    // useEffect(() => {
    //     fetch(ip + 'api/tipocancha/')
    //         .then((response) => response.json())
    //         .then((json) => setTipos(json))
    //         .catch((error) => console.error(error));
    // }, []);

    return (
        <ScrollView style={s.container}>
            <BotoneraSuperior />
            <Text style={s.subtitulo}>Agregar Cancha</Text>
            <TextInput
                style={s.input}
                value={numero}
                placeholder="Número"
                onChangeText={(texto) => setNumero(texto)}
                keyboardType="numeric"
            />
            <TextInput
                style={s.input}
                value={precio}
                placeholder="Precio"
                onChangeText={(texto) => setPrecio(texto)}
                keyboardType="numeric"
            />
            <View style={s.contenedorPicker}>
                <Picker
                    selectedValue={descripcion}
                    style={s.picker}
                    placeholder='Selecciona un tipo de cancha'
                    onValueChange={(itemValue, itemIndex) => {
                        setDescripcion(itemValue);
                    }}
                >
                    <Picker.Item label="Seleccionar tipo de cancha" value="0" />
                    <Picker.Item label="Cancha Futbol 5" value="Cancha Futbol 5" />
                    <Picker.Item label="Cancha Futbol 7" value="Cancha Futbol 7" />
                    <Picker.Item label="Cancha Futbol 11" value="Cancha Futbol 11" />
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
                    onPress={() => guardarCancha({ descripcion, numero, precio })}
                />
            </View>
        </ScrollView>
    )
}

export default AgregarCancha;