import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';

import s from '../../components/styles';
import BotoneraSuperior from '../../components/botoneraSuperior';
import Listado from './scrollViewReservas';

export default function ScrollViewCanchas() {
    const navigation = useNavigation();
    return (
        <View style={s.container}>
            <BotoneraSuperior />
            <View style={s.contenedorSubtitulo}>
                <Text style={s.subtituloAdmin} >Mis reservas</Text>
                <View style={s.contenedorMas}>
                    <Icon
                        name='plus'
                        size={28}
                        color='#000'
                        style={s.iconoListClaro}
                        onPress={() => navigation.navigate('Agregar Reserva')}
                    />
                </View>
            </View>
            <Listado/>
        </View>
    )

}

