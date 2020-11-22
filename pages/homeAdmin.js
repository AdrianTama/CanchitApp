import React, { useEffect, useState, useContext } from 'react';
import { Picker, StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native';
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
                <TouchableHighlight style={s.containerBotonHome} onPress={() => navigation.navigate("Listado Canchas")}>
                    <View style={s.boton}>
                        <Text style={s.textoBoton}>Listado de canchas</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={s.containerBotonHome} onPress={() => navigation.navigate("Listado Reservas")}>
                    <View style={s.boton}>
                        <Text style={s.textoBoton}>Listado de reservas</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
}

