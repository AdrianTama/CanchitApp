import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Row from "./rowReserva";

import s from '../../components/styles';
import BotoneraSuperior from '../../components/botoneraSuperior';

export default function ScrollViewTurnos() {

    const ip = 'https://secret-shore-39623.herokuapp.com/';
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        fetch(ip + 'api/reservas')
            .then((response) => response.json())
            .then((json) => setReservas(json))
            .catch((error) => console.error(error));

    })

    return (
        <ScrollView style={s.container}>
            <BotoneraSuperior />
            <View style={s.contenedorSubtitulo}>
                <Text style={s.subtituloAdmin}>Reservas</Text>
            </View>
            {
                reservas.map((reserva) => (
                    <Row key={reserva._id} reserva={reserva} />
                ))
            }
        </ScrollView>
    )

}

