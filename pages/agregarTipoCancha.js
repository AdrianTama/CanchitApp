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

const AgregarTipoCancha = ({guardarTipoCancha}) => {

    const [descripcion, setDescripcion] = useState("")

    const [puedeEnviar, setPuedeEnviar] = useState(false)

    const navigation = useNavigation(); 

    // Validacion de boton enviar
    useEffect( () => {

        setPuedeEnviar(descripcion.length > 3)
        
    }, [descripcion])

    // const guardarContacto = () => {
    //     console.log("Aqui guardo el contacto: ", nombre, telefono)
    // }

    return (
        <View style={styles.container}>
            <BotoneraSuperior/>
            <Text style={styles.subtitulo}>Agregar Tipo Cancha</Text>
            <TextInput
                style={styles.input}
                value={descripcion}
                placeholder="Descripción"
                onChangeText={(texto) => setDescripcion(texto)}
            />            
            <Button
                title={"Guardar tipo de cancha"}
                onPress={() => guardarTipoCancha({descripcion})}
                disabled={!puedeEnviar}
            />
            <Button
                title={"Volver"}
                onPress={() => navigation.goBack()}
            />

        </View>
    )
}

export default AgregarTipoCancha;