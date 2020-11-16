import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';

import s from '../../components/styles'

export default function Row({ cancha }) {
    const navigation = useNavigation();
    
    return (
        <View style={s.contenedorRow}>
            <Text style={s.itemList}>Cancha número {cancha.numero}</Text>
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