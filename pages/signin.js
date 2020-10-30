import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text , TextInput, View, TouchableHighlight} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';

import BotoneraSuperior from '../components/nombreApp';

export default function SignIn(){
    const [usuario, onChangeUser] = React.useState('');
    const [clave, onChangeClave] = React.useState(''); 
    const navigation = useNavigation(); 

    function ingresar(){
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container} >
            <BotoneraSuperior/>
            <View style={styles.containerIngreso}>
                <StatusBar style="auto" />
                <View style={styles.row}>
                    <Icon 
                        name='person' 
                        size={20} 
                        color='#000' 
                        style= {styles.icono}
                    />
                    <TextInput
                        style={styles.box}
                        onChangeText={text => onChangeUser(text)}
                        value={usuario}
                        placeholder='Ingresa tu usuario'
                    />
                </View>
                <View style={styles.row}>
                    <Icon 
                        name='lock' 
                        size={20} 
                        color='#000' 
                        style= {styles.icono}
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.box}
                        onChangeText={text => onChangeClave(text)}
                        value={clave}
                        placeholder='Ingresa tu contraseña'
                    />
                </View>
                
                <TouchableHighlight style={styles.containerBoton} onPress={ingresar}>
                    <View style={styles.boton}>
                        <Text style= {styles.textoBoton}>Ingresar</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    row:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    icono:{
        paddingLeft : 20, 
    },

    container: {
        flex: 1,
        paddingTop: 50,
    }, 

    containerIngreso:{
        paddingTop: 50,
    },

    texto:{
        marginLeft: 40,
    },
    
    box: {
        height:40,
        width: 350,
        borderBottomWidth: 1,
        marginVertical: 30,
        alignContent: 'center',
        marginLeft: 20,
        marginRight:20,
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