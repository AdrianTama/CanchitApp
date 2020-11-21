import React, { useState, useEffect, useContext } from 'react';
import { Picker, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import s from '../components/styles';
import BotoneraSuperior from '../components/botoneraSuperior';
import { ScrollView } from 'react-native-gesture-handler';

export default function MiReserva({ route }) {
    const { reserva } = route.params
    const context = useContext(GlobalContext);
    const [tipoElegido] = useState(context.reserva.tipoElegido)
    const [canchaElegida] = useState(context.reserva.canchaElegida)
    const [diaElegido] = useState(context.reserva.diaElegido)
    const [horarioElegido] = useState(context.reserva.horarioElegido)

    const [puedeEnviar, setPuedeEnviar] = useState(false)
    const navigation = useNavigation();

    useEffect(() => {

        setPuedeEnviar(tipoElegido != 0 && canchaElegida != '' && diaElegido != '' && horarioElegido != '')

    }, [tipoElegido, canchaElegida, diaElegido, horarioElegido])

    async function guardarUsuario() {

        if (puedeEnviar) {

            //Conformación de componentes para el fetch
            const headers = new Headers();

            headers.append("Content-type", "application/json")

            const requestOptions = {
                method: "GET",
                headers: headers,
                body: JSON.stringify({
                    tipoElegido: tipoElegido,
                    canchaElegida: canchaElegida,
                    diaElegido: diaElegido,
                    horarioElegido: horarioElegido
                })
            }

            //Almacenamos el response del fetch
            let response = await fetch(ip + 'api/reservas/miReserva' + context.usuario.email, requestOptions)
                .then((res) => res.json())
                .catch(err => {
                    console.log("Error: ", err)
                })
            //Dependiendo el response, mostramos un msj    
            if (reserva == false) {
                Alert.alert("No se registra ninguna reserva")
            }

        }
    }

    return (
        <ScrollView style={s.container} >
            <BotoneraSuperior />
            <Text style={s.subtitulo}>Mi reserva</Text>

            <View style={s.reserva}>
                <Text style={s.texto}>Cancha: {reserva.nroCancha}</Text>
                <Text style={s.texto}>Dia: {reserva.dia}</Text>
                <Text style={s.texto}>Hora: {reserva.hora}</Text>
            </View>

            <TouchableHighlight style={s.containerBoton} onPress={() => navigation.navigate('Home')}>
                <View style={s.boton}>
                    <Text style={s.textoBoton}>Volver</Text>
                </View>
            </TouchableHighlight>
            <TouchableOpacity style={s.containerBoton} onPress={() => navigation.navigate('Home')}>
                <View style={s.boton}>
                    <Text style={s.textoBoton}>Cancelar Reserva</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>


    );
}

