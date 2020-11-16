import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';

import s from '../../components/styles'

export default function Row({ reserva }) {
    const navigation = useNavigation();
    
    return (
        <View style={s.contenedorRow}>
            <Text style={s.itemList}>Cancha número {reserva.nroCancha} a las {reserva.hora}hs</Text>
            <Icon
                name='chevron-right'
                size={20}
                color='#000'
                style={s.iconoList}
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}