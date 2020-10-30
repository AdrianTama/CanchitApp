import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BotoneraSuperior from '../components/botoneraSuperior';


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

    picker: {
        minWidth: 100,
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3
        
    },
    containerBoton:{
        alignItems: 'center',
    },

    boton:{
        width:300,
        height: 40,
        backgroundColor: '#720876',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
        marginBottom: 10,
        borderWidth:1,
        borderRadius:10,
    },

    textoBoton:{
        color: 'white',
        fontSize:15
    },

})

const AgregarCancha = () => {

    const [descripcion, setDescripcion] = useState("");
    const [numero, setNumero] = useState("");
    const [tipo, setTipo] = useState("0");

    const [puedeEnviar, setPuedeEnviar] = useState(false)

    const navigation = useNavigation(); 

    // Validacion de boton enviar
    useEffect( () => {

        setPuedeEnviar(descripcion.length > 3 && numero != 0 && tipo !='0')
        
    }, [descripcion, numero, tipo])

    const guardarCancha = () => {
         console.log("cancha guardada", descripcion, numero, tipo)
     }

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
            <Picker
                selectedValue={tipo}
                style={styles.picker}
                placeholder='Selecciona un tipo de cancha'
                onValueChange={(itemValue, itemIndex) => {
                setTipo(itemValue);
                }}
            >
                <Picker.Item label="Seleccionar tipo de cancha" value="0" />
                <Picker.Item label="Cancha Futbol 5" value="5" />
                <Picker.Item label="Cancha Futbol 7" value="7" />
                <Picker.Item label="Cancha Futbol 11" value="11" />
            </Picker>
            
            <TouchableHighlight 
                style={styles.containerBoton} 
                onPress={() => guardarCancha({descripcion, numero, tipo})} 
                disabled={!puedeEnviar}
            >
                <View style={styles.boton}>
                    <Text style= {styles.textoBoton}>Guardar</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight 
                style={styles.containerBoton} 
                onPress={() => navigation.goBack()}
            >
                <View style={styles.boton}>
                    <Text style= {styles.textoBoton}>Volver</Text>
                </View>
            </TouchableHighlight>

        </View>
    )
}

export default AgregarCancha;