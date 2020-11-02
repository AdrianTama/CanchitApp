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

const AgregarUsuario = ({guardarUsuario}) => {

    const [email, setEmail] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [confirmarContraseña, setConfirmarContraseña] = useState("")

    const [puedeEnviar, setPuedeEnviar] = useState(false)

    const navigation = useNavigation(); 

    // Validacion de boton enviar
    useEffect( () => {
        
        setPuedeEnviar(email.length > 3 && nombre.length > 1 && apellido.length > 1 && (telefono != 0 && telefono > 7) && contraseña.length >= 8 && confirmarContraseña == contraseña)
        
    }, [email, nombre, apellido, telefono, contraseña, confirmarContraseña])
    

    return (
        <View style={styles.container}>
            <BotoneraSuperior/>
            <Text style={styles.subtitulo}>Registrar usuario</Text>
            <TextInput
                style={styles.input}
                value={email}
                placeholder="Email"
                onChangeText={(texto) => setEmail(texto)}
            />
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
            <TextInput
                style={styles.input}
                value={contraseña}
                placeholder="Contraseña"
                onChangeText={(texto) => setContraseña(texto)}                
            />
            <TextInput
                style={styles.input}
                value={confirmarContraseña}
                placeholder="Confirmar contraseña"
                onChangeText={(texto) => setConfirmarContraseña(texto)}            
            />
            <Button
                title={"Guardar Usuario"}
                onPress={() => guardarUsuario({email, nombre, apellido, telefono, contraseña, confirmarContraseña})}
                disabled={!puedeEnviar}
            />
            <Button
                title={"Volver"}
                onPress={() => navigation.goBack()}
            />

        </View>
    )
}

export default AgregarUsuario;