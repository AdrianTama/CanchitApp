import React, { useEffect, useState, useContext } from 'react';
import { Picker, Text, View, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BotoneraSuperior from '../components/botoneraSuperior';
import { ScrollView } from 'react-native-gesture-handler';
import GlobalContext from '../components/context';

import s from '../components/styles'

export default function Home() {

    const navigation = useNavigation();
    const context = useContext(GlobalContext);

    return (
        <ScrollView style={s.container} >
            <BotoneraSuperior />

            <View style={s.botonera}>
                <TouchableHighlight style={s.containerBotonHome} onPress={() => navigation.navigate("Nueva Reserva")}>
                    <View style={s.boton}>
                        <Text style={s.textoBoton}>Reservar Cancha</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={s.containerBotonHome} onPress={() => navigation.navigate("Mi Reserva")}>
                    <View style={s.boton}>
                        <Text style={s.textoBoton}>Mi Reserva</Text>
                    </View>
                </TouchableHighlight>


            </View>

        </ScrollView>
    );
}