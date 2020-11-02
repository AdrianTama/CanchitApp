import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';

import BotoneraSuperior from '../components/botoneraSuperior';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        
    },

    input: {
        borderBottomWidth:1,
        borderColor: 'gray',
        minWidth: 100,
        marginBottom: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
       
    },

    subtitulo:{
        fontSize:20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom:20
    },

    botoneraInferior: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    iconoDerecho:{
        paddingLeft : 20, 
    },


    iconoIzquierdo:{
        paddingRight : 20, 
    },

    dato:{
        fontSize:10,
        paddingLeft : 20, 
    }

})

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
        <View style={styles.container}>
            <BotoneraSuperior/>
            <Text style={styles.subtitulo}>Mi perfil</Text>
            <Text style={styles.dato}>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
               
            />
            <Text style={styles.dato}>Nombre</Text>
            <TextInput
                style={styles.input}
                value={nombre}
                placeholder="Nombre"
                onChangeText={(texto) => setNombre(texto)}                
            />
            <Text style={styles.dato}>Apellido</Text>
            <TextInput
                style={styles.input}
                value={apellido}
                placeholder="Apellido"
                onChangeText={(texto) => setApellido(texto)}            
            />
            <Text style={styles.dato}>Teléfono</Text>
            <TextInput
                style={styles.input}
                value={telefono}
                placeholder="Teléfono"
                onChangeText={(texto) => setTelefono(texto)}
                keyboardType="numeric"
            />
            

            <View style={styles.botoneraInferior}>
                <Icon 
                name='x' 
                size={40} 
                color='#000' 
                style= {styles.iconoDerecho}
                onPress={() => navigation.goBack()}
                />
                <Icon 
                name='check' 
                size={40} 
                color='#000' 
                style= {styles.iconoIzquierdo}
                onPress={() => guardarUsuario({email, nombre, apellido, telefono})}
                />
            </View>
            <Button
                title={"Cambiar Clave"}
                onPress={() => navigation.navigate("Cambiar Clave")}
            />

        </View>
    )
}

export default Perfil;