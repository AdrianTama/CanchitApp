import React, { useState, useEffect, useContext } from 'react';
import { Picker, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import s from '../components/styles';
import BotoneraSuperior from '../components/botoneraSuperior';
import { ScrollView } from 'react-native-gesture-handler';
import GlobalContext from '../components/context';

export default function MiReserva({ route }) {
    const { reserva } = route.params;
    const navigation = useNavigation();
    
    
    return (
        <ScrollView style={s.container} >
            <BotoneraSuperior />
            <Text style={s.subtitulo}>Mi reserva</Text>

            <View style={s.reserva}>
                <Text style={s.texto}>Cancha: {reserva.nroCancha}</Text>
                <Text style={s.texto}>Dia: {reserva.dia.toString().substring(0, 10)}</Text>
                <Text style={s.texto}>Hora: {reserva.hora}</Text>
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

