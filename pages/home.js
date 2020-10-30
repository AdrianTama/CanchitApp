import React from 'react';
import { Picker, StyleSheet, Text , View, TouchableHighlight, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BotoneraSuperior from '../components/botoneraSuperior';

export default function Home(){

    const navigation = useNavigation(); 

    return (
        <View style={styles.container} >
            <BotoneraSuperior/>

            <View style={styles.botonera}>
                <TouchableHighlight style={styles.containerBoton} onPress={() => navigation.navigate("Nueva Reserva")}>
                    <View style={styles.boton}>
                        <Text style= {styles.textoBoton}>Reservar Cancha</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.containerBoton} onPress={() => navigation.navigate("Mi Reserva")}>
                    <View style={styles.boton}>
                        <Text style= {styles.textoBoton}>Mi Reserva</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.containerBoton} onPress={() => navigation.navigate("Agregar Cancha")}>
                    <View style={styles.boton}>
                        <Text style= {styles.textoBoton}>Agregar Cancha</Text>
                    </View>
                </TouchableHighlight>
            </View>
            
        </View>
    );
  }

  const styles = StyleSheet.create({
    botonera:{
        marginTop: 50,
    },
    container: {
        flex: 1,
        paddingTop: 20,
    }, 

    containerBoton:{
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 15,
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