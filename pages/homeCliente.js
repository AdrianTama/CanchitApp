import React, { useEffect, useState, useContext } from 'react';
import { Picker, Text, View, TouchableHighlight } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import BotoneraSuperior from '../components/botoneraSuperior';
import { ScrollView } from 'react-native-gesture-handler';
import GlobalContext from '../components/context';

import s from '../components/styles'

export default function Home() {

    const ip = 'https://secret-shore-39623.herokuapp.com/';
    const navigation = useNavigation();
    const context = useContext(GlobalContext);
    const [response, setResponse] = useState("");
    const isFocused = useIsFocused();

    useEffect(() => {

        buscarReserva(); 

    }, [isFocused])

    async function buscarReserva() {
        const headers = new Headers();

        headers.append("Content-type", "application/json")

        const requestOptions = {
            method: "GET",
            headers: headers
        }

        await fetch(ip + 'api/reservas/miReserva/' + context.usuario.email, requestOptions)
            .then((res) => res.json())
            .then((json) => setResponse(json))
            .catch(err => {
                console.log("Error: ", err)
            })
            
    }

    function chequeoReserva(response) {
        if (response != false) {
            navigation.navigate("Mi Reserva", {reserva: response});
        } else {
            navigation.navigate("Nueva Reserva");
        }
    }


    return (
        <ScrollView style={s.container} >
            <BotoneraSuperior />

            <View style={s.botonera}>
                <TouchableHighlight style={s.containerBotonHome} onPress={() => chequeoReserva(response)}>
                    <View style={s.boton}>
                    {response === false ?
                    <Text style={s.textoBoton}>Reservar Cancha</Text>
                    :
                    <Text style={s.textoBoton}>Mi Reserva</Text>
                    }
                        
                    </View>
                </TouchableHighlight>


            </View>

        </ScrollView >
    );
}