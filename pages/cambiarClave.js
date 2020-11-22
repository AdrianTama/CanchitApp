import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Octicons';
import GlobalContext from '../components/context';

import BotoneraSuperior from '../components/botoneraSuperior';
import s from '../components/styles'

//Falta método en el back para hacer el cambio de clave

const cambiarClave = ({ cambiarClave }) => {

    const context = useContext(GlobalContext);
    const [email, setEmail] = useState(context.usuario.email);
    const [password, setPassword] = useState('');
    const [nuevapassword, setNuevaPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [puedeEnviar, setPuedeEnviar] = useState(false)

    const navigation = useNavigation();
    const ip = 'https://secret-shore-39623.herokuapp.com/';

    // Validacion de boton enviar
    useEffect(() => {

        setPuedeEnviar((password.length >= 4) && (nuevapassword.length >= 4) && (confirmPassword == nuevapassword) && (nuevapassword != password))

    }, [password, nuevapassword, confirmPassword])

    async function modificarClave() {
        if (puedeEnviar) {
            //Conformación de componentes para el fetch
            const headers = new Headers();

            headers.append("Content-type", "application/json");
            console.log(nuevapassword)
            const requestOptions = {
                method: "PUT",
                headers: headers,
                body: JSON.stringify({
                    email: email,
                    password: password,
                    nuevaPassword: nuevapassword,
                })
            }

            //Almacenamos el response del fetch
            let response = await fetch(ip + 'api/usuarios/modificarContrasena/', requestOptions)
                .then((res) => res.json())
                .catch(err => {
                    console.log("Error: ", err)
                })
            //Dependiendo el response, mostramos un msj    
            if (response === "Contraseña incorrecta") {
                Alert.alert("Error", "La contraseña actual es errónea");
            } else {
                Alert.alert("Contraseña modificada con éxito");
            }
        } else {
            Alert.alert(
                "Error",
                "¡Revisar los campos completados!",
                [{
                    text: "Cancelar",
                    onPress: console.log('Yes Pressed'),
                }]
            )
        }
    }


    return (
        <ScrollView style={s.container}>
            <BotoneraSuperior />
            <View style={s.contenedorSubtitulo}>
                <Text style={s.subtituloAdmin} >Cambiar contraseña</Text>
            </View>
            <View style={s.containerIngreso}>

                <TextInput
                    style={s.input}
                    value={password}
                    placeholder="Contraseña actual"
                    secureTextEntry={true}
                    onChangeText={(texto) => setPassword(texto)}
                />
                <TextInput
                    style={s.input}
                    value={nuevapassword}
                    placeholder="Nueva contraseña"
                    secureTextEntry={true}
                    onChangeText={(texto) => setNuevaPassword(texto)}
                />
                <TextInput
                    style={s.input}
                    value={confirmPassword}
                    placeholder="Confirmar nueva contraseña"
                    secureTextEntry={true}
                    onChangeText={(texto) => setConfirmPassword(texto)}
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
                    onPress={modificarClave}
                />
            </View>

        </ScrollView>
    )
}

export default cambiarClave;