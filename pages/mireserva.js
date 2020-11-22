import React, { useState, useContext } from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity, Alert, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import s from '../components/styles';
import BotoneraSuperior from '../components/botoneraSuperior';
import { ScrollView } from 'react-native-gesture-handler';
import GlobalContext from '../components/context';

export default function MiReserva({ route }) {
    const { reserva } = route.params;
    const navigation = useNavigation();
    const context = useContext(GlobalContext);
    const [respuesta, setRespuesta] = useState('');
    const ip = 'https://secret-shore-39623.herokuapp.com/';

    async function cancelarReserva() {

        const headers = new Headers();

        headers.append("Content-type", "application/json")

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                usuario: context.usuario,
                reserva: reserva,
            })
        }

        await fetch(ip + 'api/reservas/cancelacionReserva/', requestOptions)
            .then((res) => res.json())
            .then((json) => setRespuesta(json))
            .catch(err => {
                console.log("Error: ", err)
            })
        context.cambioDatos(context.usuario, context.token, 'reserva cancelada', context.objetoReserva);
        navigation.navigate('Home');

    }

    function cancelar() {

        Alert.alert(
            "¿Está seguro que desea cancelar su reserva?",
            "",
            [
                {
                    text: "Cancelar",
                    onPress: console.log("cancelado")
                },
                {
                    text: "Confirmar",
                    onPress: cancelarReserva
                }
            ],
            { cancelable: false })
    };


    return (
        <ScrollView style={s.container} >
            <BotoneraSuperior />
            <View style={s.contenedorSubtitulo}>
                <Text style={s.subtituloAdmin} >Mi reserva</Text>
            </View>
            <View style={s.contenedorImagen}>
                <Image
                    style={s.imagenReserva}
                    source={{
                        uri: 'https://images.vexels.com/media/users/3/132234/isolated/preview/ac198c217df0bbc58195e48afd92de5e-jugador-de-futbol-tiro-pelota-by-vexels.png',
                    }}
                />
            </View>
            <View style={s.contenedorMenuLateral}>
                <View style={s.contenedorListado}>
                    <View>
                        <Text style={s.itemList}>Usted reservó la cancha número {reserva.nroCancha} para
                        el día {reserva.dia.toString().substring(0, 10)} a las {reserva.hora}:00hs</Text>
                    </View>
                </View>
            </View>


            <TouchableOpacity style={s.containerBoton} onPress={() => cancelar()}>
                <View style={s.boton}>
                    <Text style={s.textoBoton}>Cancelar Reserva</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>


    );
}



