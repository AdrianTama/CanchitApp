import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Row from "./rowCancha";
import Icon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';

import s from '../../components/styles';
import BotoneraSuperior from '../../components/botoneraSuperior';

export default function ScrollViewCanchas() {

    const ip = 'https://secret-shore-39623.herokuapp.com/';
    const [canchas, setCanchas] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        fetch(ip + 'api/canchas')
            .then((response) => response.json())
            .then((json) => setCanchas(json))
            .catch((error) => console.error(error));
    })

    return (
        <ScrollView style={s.container}>
            <BotoneraSuperior />
            <View style={s.contenedorSubtitulo}>
                <Text style={s.subtituloAdmin} >Mis canchas</Text>
                <View style={s.contenedorMas}>
                    <Icon
                        name='plus'
                        size={28}
                        color='#000'
                        style={s.iconoListClaro}
                        onPress={() => navigation.navigate('Agregar Cancha')}
                    />
                </View>

            </View>

            {
                canchas.map((cancha) => (
                    <Row key={cancha._id} cancha={cancha} />
                ))
            }
        </ScrollView>
    )

}

