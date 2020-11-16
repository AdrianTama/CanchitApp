import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import Row from "./rowCancha";

import s from '../../components/styles';
import BotoneraSuperior from '../../components/botoneraSuperior';

export default function ScrollViewCanchas() {

    const ip = 'https://secret-shore-39623.herokuapp.com/';
    const [canchas, setCanchas] = useState([]);

    useEffect(() => {
        fetch(ip + 'api/canchas')
            .then((response) => response.json())
            .then((json) => setCanchas(json))
            .catch((error) => console.error(error));
    })

    return (
        <ScrollView style={s.container}>
            <BotoneraSuperior />
            <View style={s.row}>
                <Text style={s.subtitulo}>Mis canchas</Text>
                <Icon
                    name='plus'
                    size={20}
                    color='#000'
                    style={s.iconoList}
                    onPress={() => navigation.navigate('Agregar Cancha')}
                />
            </View>

            {
                canchas.map((cancha) => (
                    <Row key={cancha._id} cancha={cancha} />
                ))
            }
        </ScrollView>
    )

}

