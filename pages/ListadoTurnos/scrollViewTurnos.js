import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import Row from "./rowCancha";

import s from '../../components/styles';
import BotoneraSuperior from '../../components/botoneraSuperior';

export default function ScrollViewTurnos() {

    const ip = 'https://secret-shore-39623.herokuapp.com/';
    const [reservas, setReservas] =useState([]);

    useEffect(() => {
        fetch(ip + 'api/turnos')
            .then((response) => response.json())
            .then((json) => setReservas(json))
            .catch((error) => console.error(error));
    })

    return (
        <ScrollView style={s.container}>
            <BotoneraSuperior/>
            <Text style={s.subtitulo}>Mis canchas</Text>
            {
                reservas.map((reserva) => (
                    <Row key={reserva._id} reserva={reserva} />
                ))
            }
        </ScrollView>
    )

}

