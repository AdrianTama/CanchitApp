import React, { useState, useEffect } from 'react';
import { Picker, Text, Alert, View, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';

//creé un componente con el stylesheet para llamarlo cada vez que lo necesitamos así no repetimos código en cada componente
import s from '../components/styles'
import BotoneraSuperior from '../components/botoneraSuperior';


//Ver si dividimos los picker en distintos componentes
//¿Cómo comunicamos los componentes con los ítems que va seleccionando el usuario?
//Tiene que renderizar cada vez que el usuario selecciona un ítem para que cargue los turnos disponibles
//Falta ver la generacion de días y horarios para los picker que quedan
export default function NuevaReserva() {

    const navigation = useNavigation();
    const [puedeEnviar, setPuedeEnviar] = useState(false);

    //Variables para la selección que conforma la reserva a enviar
    const [tipoElegido, setTipoElegido] = useState([]);
    const [canchaElegida, setCanchaElegida] = useState([]);
    const [diaElegido, setDiaElegido] = useState([]);
    const [horarioElegido, setHorarioElegido] = useState([]);

    //Variables para los picker
    const [tipos, setTipos] = useState([]);
    const [canchas, setCanchas] = useState([]);
    const [dias, setDias] = useState([]);
    const [horarios, setHorarios] = useState([]);

    function reservar() {
        if (puedeEnviar == true) {
            Alert.alert(
                "Confirmar reserva",
                "Usted seleccionó la " + tipoElegido + ' número ' + canchaElegida,
                [
                    {
                        text: "Cancelar",
                        onPress: console.log('Yes Pressed'),
                    },
                    { text: "Confirmar", onPress: guardarReserva }
                ],
                { cancelable: false }
            );
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

    function guardarReserva() {
        navigation.navigate("Mi Reserva", {
            dia: diaElegido,
            hora: horarioElegido,
            cancha: canchaElegida
        });
    }


    useEffect(() => {
        if (tipoElegido != 0 && canchaElegida != 0) {
            setPuedeEnviar(true);
        }
    }, [canchaElegida]);

    //ejecuta el fetch luego del primer renderizado
    useEffect(() => {
        //adaptar con ip de la compu que ejecute: http://ip:3000/api...
        fetch('http://192.168.0.117:3000/api/tipocancha/')
            .then((response) => response.json())
            .then((json) => setTipos(json))
            .catch((error) => console.error(error));
    }, []);

    //ejecuta el fetch recién cuando se selecciona un tipo de cancha
    useEffect(() => {
        //adaptar con ip de la compu que ejecute: http://ip:3000/api..
        fetch('http://192.168.0.117:3000/api/canchas/' + tipoElegido)
            .then((response) => response.json())
            .then((json) => setCanchas(json))
            .catch((error) => console.error(error));
    }, [tipoElegido]);

    useEffect(() => {
        //adaptar con ip de la compu que ejecute: http://ip:3000/api..
        fetch('http://192.168.0.117:3000/api/reservas/buscar' + canchaElegida)
            .then((response) => response.json())
            .then((json) => setDias(json))
            .catch((error) => console.error(error));
    }, [canchaElegida]);

    return (
        <View style={s.container} >
            <BotoneraSuperior />
            <Text style={s.subtitulo}>Nueva Reserva</Text>

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
                        <Picker.Item label={item.numero} value={item.numero} key={key} />)
                    )}
                </Picker>
            </View>

            <Text style={s.texto}>Paso 3: Elegí el día</Text>
            <View style={s.contenedorPicker}>
                <Picker
                    selectedValue={diaElegido}
                    style={s.picker}
                    onValueChange={(itemValue, itemIndex) => setDiaElegido(itemValue)}
                >
                    <Picker.Item label="Seleccionar día" value="0" />
                    {dias.map((item) => (
                        <Picker.Item label={item}  />)
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
                        <Picker.Item label={item.numero} value={item.numero} key={key} />)
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

        </View>
    );
}

