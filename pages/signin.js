import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text , TextInput, View, TouchableHighlight} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Canchitapp from '../components/canchitapp'

export default function SignIn(){
    const [usuario, onChangeUser] = React.useState('');
    const [clave, onChangeClave] = React.useState(''); 
    const navigation = useNavigation(); 

    function ingresar(){
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container} >
            <Canchitapp/>
            <StatusBar style="auto" />
            <Text style= {styles.texto}>Ingrese su usuario</Text>
            <TextInput
                style={styles.box}
                onChangeText={text => onChangeUser(text)}
                value={usuario}
            />
            <Text style= {styles.texto}>Ingrese su contraseña</Text>
            <TextInput
                secureTextEntry={true}
                style={styles.box}
                onChangeText={text => onChangeClave(text)}
                value={clave}
            />
           <TouchableHighlight style={styles.containerBoton} onPress={ingresar}>
                <View style={styles.boton}>
                    <Text style= {styles.textoBoton}>Ingresar</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
    }, 

    texto:{
        marginLeft: 20,
    },
    
    box: {
        height:40,
        width: 350,
        borderBottomWidth: 1,
        marginVertical: 30,
        alignContent: 'center',
        marginLeft: 20,
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