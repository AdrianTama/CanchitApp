import React, { useState, useEffect, useContext } from 'react';
import { Alert, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Octicons';


import BotoneraSuperior from '../components/botoneraSuperior';
import s from '../components/styles'
import GlobalContext from '../components/context';


//Cuando tengamos el usuario guardado en una variable de entorno, 
//debemos finalizar la codificación de la conexión a la API.
//Actualmente no reconoce bien el id con lo cual no funciona.

const Perfil = ({guardarUsuario}) => {

    const context = useContext(GlobalContext);
    const [email] = useState(context.usuario.email)
    const [nombre, setNombre] = useState(context.usuario.nombre)
    const [apellido, setApellido] = useState(context.usuario.apellido)
    const [telefono, setTelefono] = useState(context.usuario.telefono)
    const [id, setId] = useState(context.usuario._id)

    const [puedeEnviar, setPuedeEnviar] = useState(false)
    const ip = 'https://secret-shore-39623.herokuapp.com/';
    const navigation = useNavigation(); 
    

    // Validacion de boton enviar
    useEffect( () => {

        setPuedeEnviar(email.length > 3 && nombre.length > 1 && apellido.length > 1 && telefono != 0  && telefono.length >= 8 )
        
    }, [email, nombre, apellido, telefono])

    async function guardarUsuario() {

        if (puedeEnviar) {

            //Conformación de componentes para el fetch
            const headers = new Headers();

            headers.append("Content-type", "application/json")

            const requestOptions = {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    email: email,
                    nombre: nombre,
                    apellido: apellido,
                    telefono: telefono,
                    admin: false
                })
            }

            //Almacenamos el response del fetch
            let response = await fetch(ip + 'api/usuarios/'+id, requestOptions)
                .then((res) => res.json())
                .catch(err => {
                    console.log("Error: ", err)
                })
            //Dependiendo el response, mostramos un msj    
            if (!response) {
                console.log("No se pudo modificar.")
            } else {
                Alert.alert("Sus datos se modificaron con éxito.")
                navigation.navigate("Home")
            }

        } else {
            //Mensaje de error cuando falta algún campo o hay algún campo inválido
            Alert.alert(
                "Error",
                "¡Revisar los campos completados!",
                [{
                    text: "Cancelar",
                    onPress: console.log('Yes Pressed'),
                }]
            )
        }

    }


    return (
        <ScrollView style={s.container}>
            <BotoneraSuperior/>
            <Text style={s.subtitulo}>Mi perfil</Text>
            <Text style={s.dato}>Email</Text>
            <TextInput
                style={s.input}
                editable={false}
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
                onPress={() => guardarUsuario()}
                />
            </View>
            
            <TouchableHighlight style={s.containerBoton} onPress={() => navigation.navigate("Cambiar Contraseña")}>
                <View>
                    <Text style={s.link}>Cambiar contraseña</Text>
                </View>
            </TouchableHighlight>

        </ScrollView>
    )
}

export default Perfil;
