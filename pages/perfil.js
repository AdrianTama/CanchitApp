import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';

import BotoneraSuperior from '../components/botoneraSuperior';
import s from '../components/styles'


const Perfil = ({guardarUsuario}) => {

    const [email] = useState("prueba@prueba.com")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")

    const [puedeEnviar, setPuedeEnviar] = useState(false)

    const navigation = useNavigation(); 

    // Validacion de boton enviar
    useEffect( () => {

        setPuedeEnviar(email.length > 3 && nombre.length > 1 && apellido.length > 1 && telefono != 0  && telefono.length > 8 )
        
    }, [email, nombre, apellido, telefono])


    return (
        <View style={s.container}>
            <BotoneraSuperior/>
            <Text style={s.subtitulo}>Mi perfil</Text>
            <Text style={s.dato}>Email</Text>
            <TextInput
                style={s.input}
                value={email}
               
            />
            <Text style={s.dato}>Nombre</Text>
            <TextInput
                style={s.input}
                value={nombre}
                placeholder="Nombre"
                onChangeText={(texto) => setNombre(texto)}                
            />
            <Text style={s.dato}>Apellido</Text>
            <TextInput
                style={s.input}
                value={apellido}
                placeholder="Apellido"
                onChangeText={(texto) => setApellido(texto)}            
            />
            <Text style={s.dato}>Teléfono</Text>
            <TextInput
                style={s.input}
                value={telefono}
                placeholder="Teléfono"
                onChangeText={(texto) => setTelefono(texto)}
                keyboardType="numeric"
            />
            

            <View style={s.botoneraInferior}>
                <Icon 
                name='x' 
                size={40} 
                color='#000' 
                style= {s.iconoDerecho}
                onPress={() => navigation.goBack()}
                />
                <Icon 
                name='check' 
                size={40} 
                color='#000' 
                style= {s.iconoIzquierdo}
                onPress={() => guardarUsuario({email, nombre, apellido, telefono})}
                />
            </View>
            
            <TouchableHighlight style={s.containerBoton} onPress={() => navigation.navigate("Cambiar Clave")}>
                <View>
                    <Text style={s.link}>Cambiar contraseña</Text>
                </View>
            </TouchableHighlight>

        </View>
    )
}

export default Perfil;
