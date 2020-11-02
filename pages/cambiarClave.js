import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';
import BotoneraSuperior from '../components/nombreApp';
import { useNavigation } from '@react-navigation/native';

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

const cambiarClave = ({cambiarClave}) => {
            
    const [contraseña, setContraseña] = useState("")
    const [nuevaContraseña, setNuevaContraseña] = useState("")
    const [confirmarContraseña, setConfirmarContraseña] = useState("")

    const [puedeEnviar, setPuedeEnviar] = useState(false)

    const navigation = useNavigation(); 

    // Validacion de boton enviar
    useEffect( () => {

        setPuedeEnviar(contraseña.length >= 8 && nuevaContraseña.length >= 8 && confirmarContraseña == nuevaContraseña)
        
    }, [contraseña, nuevaContraseña, confirmarContraseña])


    return (
        <View style={styles.container}>
            <BotoneraSuperior/>
            <Text style={styles.subtitulo}>Cambiar clave</Text>
            
            <TextInput
                style={styles.input}
                value={contraseña}
                placeholder="Contraseña"
                onChangeText={(texto) => setContraseña(texto)}                
            />
            <TextInput
                style={styles.input}
                value={nuevaContraseña}
                placeholder="Nueva contraseña"
                onChangeText={(texto) => setNuevaContraseña(texto)}
            />
            <TextInput
                style={styles.input}
                value={confirmarContraseña}
                placeholder="Confirmar contraseña"
                onChangeText={(texto) => setConfirmarContraseña(texto)}            
            />
            <Button
                title={"Cambiar Clave"}
                onPress={() => navigation.navigate("Home")}
                disabled={!puedeEnviar}
            />
            <Button
                title={"Volver"}
                onPress={() => navigation.goBack()}
            />

        </View>
    )
}

export default cambiarClave;