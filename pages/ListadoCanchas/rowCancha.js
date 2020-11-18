import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';

import s from '../../components/styles'

export default function Row({ cancha }) {
    const navigation = useNavigation();

    function verCancha(){
        navigation.navigate('')
    }

    return (
        <View style={s.contenedorRowList}>
            <Text style={s.itemList}>Cancha número {cancha.numero}</Text>
            <View style={s.contenedorMas}>
                <Icon
                    name='chevron-right'
                    size={24}
                    color='#000'
                    style={s.iconoList}
                    onPress={() => navigation.goBack()}
                />
            </View>

        </View>
    )
}