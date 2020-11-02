import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';
import BotoneraSuperior from '../components/nombreApp';
import { useNavigation } from '@react-navigation/native';
import cambiarClave from './cambiarClave';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        
    },

    input: {
        borderWidth: 1,
        borderColor: 'black',
        minWidth: 100,
        marginTop: 20,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3
    },

    subtitulo:{
        fontSize:20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        
    },

})

const modificarUsuario = ({modificarUsuario}) => {
    
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")       

    const [puedeEnviar, setPuedeEnviar] = useState(false)

    const navigation = useNavigation(); 

    // Validacion de boton enviar
    useEffect( () => {

        setPuedeEnviar(nombre.length > 1 && apellido.length > 1 && telefono != 0 && telefono.length > 7)
        
    }, [nombre, apellido, telefono])


    return (
        <View style={styles.container}>
            <BotoneraSuperior/>
            <Text style={styles.subtitulo}>Modificar usuario</Text>
            
            <TextInput
                style={styles.input}
                value={nombre}
                placeholder="Nombre"
                onChangeText={(texto) => setNombre(texto)}                
            />
            <TextInput
                style={styles.input}
                value={apellido}
                placeholder="Apellido"
                onChangeText={(texto) => setApellido(texto)}            
            />
            <TextInput
                style={styles.input}
                value={telefono}
                placeholder="Teléfono"
                onChangeText={(texto) => setTelefono(texto)}
                keyboardType="numeric"
            />
            
            <Button
                title={"Modificar Usuario"}
                onPress={() => modificarUsuario({nombre, apellido, telefono})}
                disabled={!puedeEnviar}
            />
            <Button
                title={"Volver"}
                onPress={() => navigation.goBack()}
            />
            <Button
                title={"Cambiar Clave"}
                onPress={() => navigation.navigate("Cambiar Clave")}
            />

        </View>
    )
}

export default modificarUsuario;