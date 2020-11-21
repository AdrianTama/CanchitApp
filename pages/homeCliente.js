import React, { useEffect, useState, useContext } from 'react';
import { Picker, Text, View, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BotoneraSuperior from '../components/botoneraSuperior';
import { ScrollView } from 'react-native-gesture-handler';
import GlobalContext from '../components/context';

import s from '../components/styles'

export default function Home() {

    const ip = 'https://secret-shore-39623.herokuapp.com/';
    const navigation = useNavigation();
    const context = useContext(GlobalContext);
    const [response, setResponse] = useState("");

    useEffect(() => {

        setResponse(buscarReserva()) 

    }, [])

    async function buscarReserva() {
        const headers = new Headers();

        headers.append("Content-type", "application/json")

        const requestOptions = {
            method: "GET",
            headers: headers
        }

        let respuesta = await fetch(ip + 'api/reservas/miReserva/' + context.usuario.email, requestOptions)
            .then((res) => res.json())
            .catch(err => {
                console.log("Error: ", err)
            })
            
        return respuesta
    }

    function chequeoReserva(response) {
        console.log(response)
        if (response != false) {
            navigation.navigate("Mi Reserva")
        } else {
            navigation.navigate("Nueva Reserva")
        }
    }


    return (
        <ScrollView style={s.container} >
            <BotoneraSuperior />

            <View style={s.botonera}>
                <TouchableHighlight style={s.containerBotonHome} onPress={() => chequeoReserva(response)}>
                    <View style={s.boton}>
                        <Text style={s.textoBoton}>Reservar Cancha</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={s.containerBotonHome} onPress={() => navigation.navigate("Mi Reserva")}>
                    <View style={s.boton}>
                        <Text style={s.textoBoton}>Mi Reserva</Text>
                    </View>
                </TouchableHighlight>


            </View>

        </ScrollView >
    );
}