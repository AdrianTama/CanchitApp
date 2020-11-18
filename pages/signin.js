import React , {useEffect, useState, useContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import {  Text, TextInput, View, TouchableHighlight, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';
import GlobalContext from '../components/context';

import BotoneraSuperior from '../components/nombreApp';
import s from '../components/styles';
import { ScrollView } from 'react-native-gesture-handler';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [puedeEnviar, setPuedeEnviar] = useState(false)
    const context = useContext(GlobalContext);
    
    const navigation = useNavigation();
    const ip = 'https://secret-shore-39623.herokuapp.com/';

    useEffect(() => {

        setPuedeEnviar(email.length > 3 && contraseña.length >= 4 )

    }, [email, contraseña])

    async function ingresar() {
        if(puedeEnviar){
            const headers = new Headers();

            headers.append("Content-type", "application/json")
            const requestOptions = {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    email: email,
                    password: contraseña,
                })
            }

            let response = await fetch(ip + 'api/usuarios/login', requestOptions)
                .then((res) => res.json())
                .catch(err => {
                    console.log("Error: ", err)
                })
            
                function datosLogin(usuario, token) {
                   
                     context.cambioDatos(usuario, token);
                }

             if(!response){
                Alert.alert("Error", "Credenciales inválidas.")
            }else{
                datosLogin(response.usuario, response.token);
                navigation.navigate("Home");

            } 

            
        }else{
            Alert.alert("Error", "Falta completar algún campo.")
        }
        
    };

    function registrarme() {
        navigation.navigate("Registrarme");
    };

    return (
        <ScrollView style={s.contenedorSignin} >
            <BotoneraSuperior />
            <View style={s.containerIngreso}>
                <StatusBar style="auto" />
                <View style={s.contenedorRow}>
                    <Icon
                        name='person'
                        size={20}
                        color='#000'
                        style={s.iconoSignin}
                    />
                    <TextInput
                        style={s.box}
                        onChangeText={text => setEmail(text)}
                        value={email}
                        placeholder='Ingresa tu usuario'
                    />
                </View>
                <View style={s.contenedorRow}>
                    <Icon
                        name='lock'
                        size={20}
                        color='#000'
                        style={s.iconoSignin}
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={s.box}
                        onChangeText={text => setContraseña(text)}
                        value={contraseña}
                        placeholder='Ingresa tu contraseña'
                    />
                </View>

                <TouchableHighlight style={s.containerBoton} onPress={ingresar}>
                    <View style={s.boton}>
                        <Text style={s.textoBoton}>Ingresar</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={s.containerBoton} onPress={registrarme}>
                    <View>
                        <Text style={s.link}>Registrarme</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
}
