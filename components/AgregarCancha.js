import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        minWidth: 100,
        marginTop: 20,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3
    }
})

const AgregarCancha = ({guardarCancha}) => {

    const [descripcion, setDescripcion] = useState("")
    const [numero, setNumero] = useState("")

    const [puedeEnviar, setPuedeEnviar] = useState(false)

    // Validacion de boton enviar
    useEffect( () => {

        setPuedeEnviar(descripcion.length > 3 && numero != 0)
        
    }, [descripcion, numero])

    // const guardarContacto = () => {
    //     console.log("Aqui guardo el contacto: ", nombre, telefono)
    // }

    return (
        <View>
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

        </View>
    )
}

export default AgregarCancha;