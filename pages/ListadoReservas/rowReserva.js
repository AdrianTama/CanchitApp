import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';

import s from '../../components/styles'

export default function Row({ reserva }) {
    const navigation = useNavigation();

    function verReserva(){
        navigation.navigate('Reserva', reserva)
    }

    return (
        <View style={s.contenedorRowList}>
            <Text style={s.itemList} onPress= {verReserva}>Cancha número {reserva.nroCancha} a las {reserva.hora}hs</Text>
            <View style={s.contenedorMas}>
                <Icon
                    name='chevron-right'
                    size={20}
                    color='#000'
                    style={s.iconoList}
                    onPress={verReserva}
                />
            </View>
        </View>
    )
}