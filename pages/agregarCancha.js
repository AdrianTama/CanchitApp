import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';
import BotoneraSuperior from '../components/botoneraSuperior';
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
        fontSize:25,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        
    },

})

const AgregarCancha = ({guardarCancha}) => {

    const [descripcion, setDescripcion] = useState("")
    const [numero, setNumero] = useState("")

    const [puedeEnviar, setPuedeEnviar] = useState(false)

    const navigation = useNavigation(); 

    // Validacion de boton enviar
    useEffect( () => {

        setPuedeEnviar(descripcion.length > 3 && numero != 0)
        
    }, [descripcion, numero])

    // const guardarContacto = () => {
    //     console.log("Aqui guardo el contacto: ", nombre, telefono)
    // }

    return (
        <View style={styles.container}>
            <BotoneraSuperior/>
            <Text style={styles.subtitulo}>Agregar Cancha</Text>
            <TextInput
                style={styles.input}
                value={descripcion}
                placeholder="Descripción"
                onChangeText={(texto) => setDescripcion(texto)}
            />
            <TextInput
                style={styles.input}
                value={numero}
                placeholder="Número"
                onChangeText={(texto) => setNumero(texto)}
                keyboardType="numeric"
            />
            <Button
                title={"Guardar Cancha"}
                onPress={() => guardarCancha({descripcion, numero})}
                disabled={!puedeEnviar}
            />
            <Button
                title={"Volver"}
                onPress={() => navigation.goBack()}
            />

        </View>
    )
}

export default AgregarCancha;