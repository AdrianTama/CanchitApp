import React from 'react';
import { Picker, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import s from '../components/styles';
import BotoneraSuperior from '../components/botoneraSuperior';
import { ScrollView } from 'react-native-gesture-handler';

export default function MiReserva() {

    const navigation = useNavigation();



    return (
        <ScrollView style={s.container} >
            <BotoneraSuperior />
            <Text style={s.subtitulo}>Mi reserva</Text>

            <View style={s.reserva}>
                <Text style={s.texto}>Cancha: </Text>
                <Text style={s.texto}>Dia: </Text>
                <Text style={s.texto}>Hora: </Text>
            </View>

            <TouchableHighlight style={s.containerBoton} onPress={() => navigation.navigate('Home')}>
                <View style={s.boton}>
                    <Text style={s.textoBoton}>Volver</Text>
                </View>
            </TouchableHighlight>
            <TouchableOpacity style={s.containerBoton} onPress={() => navigation.navigate('Home')}>
                <View style={s.boton}>
                    <Text style={s.textoBoton}>Cancelar Reserva</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>


    );
}

