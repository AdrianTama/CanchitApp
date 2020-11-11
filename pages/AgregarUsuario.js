import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, TouchableHighlight } from 'react-native';
import BotoneraSuperior from '../components/nombreApp';
import { useNavigation } from '@react-navigation/native';

import s from '../components/styles'
import { ScrollView } from 'react-native-gesture-handler';

const AgregarUsuario = ({ guardarUsuario }) => {

    const [email, setEmail] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [confirmarContraseña, setConfirmarContraseña] = useState("")

    const [puedeEnviar, setPuedeEnviar] = useState(false)

    const navigation = useNavigation();

    // Validacion de boton enviar
    useEffect(() => {

        setPuedeEnviar(email.length > 3 && nombre.length > 1 && apellido.length > 1 && (telefono != 0 && telefono > 7) && contraseña.length >= 8 && confirmarContraseña == contraseña)

    }, [email, nombre, apellido, telefono, contraseña, confirmarContraseña])


    return (
        <ScrollView style={s.contenedorRegistro}>
            <BotoneraSuperior />
            <View style={s.containerIngreso}>
                <TextInput
                    style={s.input}
                    value={email}
                    placeholder="Email"
                    onChangeText={(texto) => setEmail(texto)}
                />
                <TextInput
                    style={s.input}
                    value={nombre}
                    placeholder="Nombre"
                    onChangeText={(texto) => setNombre(texto)}
                />
                <TextInput
                    style={s.input}
                    value={apellido}
                    placeholder="Apellido"
                    onChangeText={(texto) => setApellido(texto)}
                />
                <TextInput
                    style={s.input}
                    value={telefono}
                    placeholder="Teléfono"
                    onChangeText={(texto) => setTelefono(texto)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={s.input}
                    value={contraseña}
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    onChangeText={(texto) => setContraseña(texto)}
                />
                <TextInput
                    style={s.input}
                    value={confirmarContraseña}
                    placeholder="Confirmar contraseña"
                    secureTextEntry={true}
                    onChangeText={(texto) => setConfirmarContraseña(texto)}
                />
            </View>

            <TouchableHighlight style={s.containerBoton} onPress={() => guardarUsuario({ email, nombre, apellido, telefono, contraseña, confirmarContraseña })}>
                <View style={s.boton}>
                    <Text style={s.textoBoton}>Confirmar</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={s.containerBoton} onPress={() => navigation.goBack()}>
                <View style={s.boton}>
                    <Text style={s.textoBoton}>Cancelar</Text>
                </View>
            </TouchableHighlight>

        </ScrollView>
    )
}

export default AgregarUsuario;