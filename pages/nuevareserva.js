import React, { useState, useEffect, useContext } from 'react';
import { Picker, Text, Alert, View } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';
import GlobalContext from '../components/context';

//creé un componente con el stylesheet para llamarlo cada vez que lo necesitamos así no repetimos código en cada componente
import s from '../components/styles'
import BotoneraSuperior from '../components/botoneraSuperior';
import { ScrollView } from 'react-native-gesture-handler';



//Ver si dividimos los picker en distintos componentes
//¿Cómo comunicamos los componentes con los ítems que va seleccionando el usuario?
//Tiene que renderizar cada vez que el usuario selecciona un ítem para que cargue los turnos disponibles
//Falta ver la generacion de días y horarios para los picker que quedan
export default function NuevaReserva() {

    const context = useContext(GlobalContext);
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [puedeEnviar, setPuedeEnviar] = useState(false);
    const ip = 'https://secret-shore-39623.herokuapp.com/';

    //Variables para la selección que conforma la reserva a enviar
    const [tipoElegido, setTipoElegido] = useState([]);
    const [canchaElegida, setCanchaElegida] = useState([]);
    const [diaElegido, setDiaElegido] = useState([]);
    const [horarioElegido, setHorarioElegido] = useState([]);

    //Variables para los picker
    const [tipos, setTipos] = useState([]);
    const [canchas, setCanchas] = useState([]);
    const [diasHorarios, setDiasHorarios] = useState([]);
    const [horarios, setHorarios] = useState([]);
    const [precio, setPrecio] = useState([]);


    function reservar() {
        if (puedeEnviar == true) {
            navigation.navigate('Pago Reserva', {
                tipo: tipoElegido,
                nroCancha: canchaElegida.numero,
                dia: diaElegido.dia,
                hora: horarioElegido,
                precio: precio
            })
        } else {
            Alert.alert(
                "Error",
                "¡Falta completar algún campo!",
                [{
                    text: "Cancelar",
                    onPress: console.log('Yes Pressed'),
                }]
            )
        }


    };

    useEffect(() => {
        if (tipoElegido != 0 && canchaElegida != 0 && diaElegido.dia != 0 && horarioElegido != 0) {
            setPuedeEnviar(true);
        }
    }, [horarioElegido]);

    //ejecuta el fetch cuando se carga la page
    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: {'Authorization': `Bearer ${context.token}`},
        }
        //adaptar con ip de la compu que ejecute: http://ip:3000/api...
        fetch(ip + 'api/tipocancha/', requestOptions)
            .then((response) => response.json())
            .then((json) => setTipos(json))
            .catch((error) => console.error(error));
    }, [isFocused]);

    //ejecuta el fetch sólo cuando cambia el tipoElegido
    useEffect(() => {
        if (tipoElegido !== undefined) {
            fetch(ip + 'api/canchas/' + tipoElegido)
                .then((response) => response.json())
                .then((json) => setCanchas(json))
                .catch((error) => console.error(error));
        }
    }, [tipoElegido]);

    //ejecuta el fetch sólo cuando cambia la canchaElegida
    useEffect(() => {
        if (canchaElegida !== undefined) {
            setPrecio(canchaElegida.precio);
            fetch(ip + 'api/reservas/buscar/' + canchaElegida.numero)
                .then((response) => response.json())
                .then((json) => setDiasHorarios(json))
                .catch((error) => {
                    console.error(error)
                });
        }
    }, [canchaElegida]);

    //ejecuta el fetch sólo cuando el diaElegido cambia
    useEffect(() => {
        if (diaElegido.horarios !== undefined) {
            setHorarios(diaElegido.horarios)
        }

    }, [diaElegido]);


    return (
        <ScrollView style={s.container} >
            <BotoneraSuperior />
            <View style={s.contenedorSubtitulo}>
                <Text style={s.subtituloAdmin} >Nueva reserva</Text>
            </View>
            <Text style={s.texto}>Paso 1: Elegí el tipo de cancha</Text>
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

            <Text style={s.texto}>Paso 2: Elegí la cancha</Text>
            <View style={s.contenedorPicker}>
                <Picker
                    selectedValue={canchaElegida}
                    style={s.picker}
                    onValueChange={(itemValue, itemIndex) => setCanchaElegida(itemValue)}
                >
                    <Picker.Item label="Seleccionar cancha" value="0" />
                    {canchas.map((item, key) => (
                        <Picker.Item label={'Número ' + item.numero} value={item} key={key} />)
                    )}
                </Picker>
            </View>

            <Text style={s.texto}>Precio: ${precio}</Text>


            <Text style={s.texto}>Paso 3: Elegí el día</Text>
            <View style={s.contenedorPicker}>
                <Picker
                    selectedValue={diaElegido}
                    style={s.picker}
                    onValueChange={(itemValue, itemIndex) => setDiaElegido(itemValue)}
                >
                    <Picker.Item label="Seleccionar día" value="0" />
                    {diasHorarios.map((item, key) => (
                        <Picker.Item label={(item.dia).substring(0, 10)} value={item} key={key} />)
                    )}
                </Picker>
            </View>

            <Text style={s.texto}>Paso 4: Elegí el horario</Text>
            <View style={s.contenedorPicker}>
                <Picker
                    selectedValue={horarioElegido}
                    style={s.picker}
                    onValueChange={(itemValue, itemIndex) => setHorarioElegido(itemValue)}
                >
                    <Picker.Item label="Seleccionar horario" value="0" />
                    {horarios.map((item, key) => (
                        <Picker.Item label={item.toString() + ':00hs'} value={item.toString()} key={key} />)
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
                    onPress={reservar}
                />
            </View>

        </ScrollView>
    );
}

