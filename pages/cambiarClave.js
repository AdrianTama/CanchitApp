import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Octicons';

import BotoneraSuperior from '../components/nombreApp';
import s from '../components/styles'


const cambiarClave = ({ cambiarClave }) => {

    const [contraseña, setContraseña] = useState("")
    const [nuevaContraseña, setNuevaContraseña] = useState("")
    const [confirmarContraseña, setConfirmarContraseña] = useState("")

    const [puedeEnviar, setPuedeEnviar] = useState(false)

    const navigation = useNavigation();

    // Validacion de boton enviar
    useEffect(() => {

        setPuedeEnviar(contraseña.length >= 8 && nuevaContraseña.length >= 8 && confirmarContraseña == nuevaContraseña)

    }, [contraseña, nuevaContraseña, confirmarContraseña])


    return (
        <ScrollView style={s.container}>
            <BotoneraSuperior />
            <View style={s.containerIngreso}>
                <TextInput
                    style={s.input}
                    value={contraseña}
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    onChangeText={(texto) => setContraseña(texto)}
                />
                <TextInput
                    style={s.input}
                    value={nuevaContraseña}
                    placeholder="Nueva contraseña"
                    secureTextEntry={true}
                    onChangeText={(texto) => setNuevaContraseña(texto)}
                />
                <TextInput
                    style={s.input}
                    value={confirmarContraseña}
                    placeholder="Confirmar contraseña"
                    secureTextEntry={true}
                    onChangeText={(texto) => setConfirmarContraseña(texto)}
                />
            </View>


            <View style={s.botoneraInferior}>
                <Icon
                    name='x'
                    size={40}
                    color='#000'
                    style={s.iconoDerecho}
                    onPress={() => navigation.goBack()}
                />
                <Icon
                    name='check'
                    size={40}
                    color='#000'
                    style={s.iconoIzquierdo}
                    onPress={cambiarClave}
                />
            </View>

        </ScrollView>
    )
}

export default cambiarClave;