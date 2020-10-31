import React from 'react';
import { Picker, StyleSheet, Text , View, TouchableHighlight,TouchableOpacity} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import BotoneraSuperior from '../components/botoneraSuperior'

export default function MiReserva(){

    const navigation = useNavigation(); 
    const {dia, hora, cancha } = useRoute().params;
    

    return (
        <View style={styles.container} >
            <BotoneraSuperior/>
            <Text style={styles.subtitulo}>Mi reserva</Text>
            {cancha.length > 0 ? <View style={styles.reserva}>
                <Text style={styles.texto}>Tipo de cancha: {cancha}</Text>
                <Text style={styles.texto}>Dia: {dia}</Text>
                <Text style={styles.texto}>Hora: {hora}</Text>
            </View> : <Text>No hay ninguna reserva.</Text>}
            
            <TouchableHighlight style={styles.containerBoton} onPress={() => navigation.navigate('Home')}>
                <View style={styles.boton}>
                    <Text style= {styles.textoBoton}>Volver</Text>
                </View>
            </TouchableHighlight>
            <TouchableOpacity style={styles.containerBoton} onPress={() => navigation.navigate('Home')}>
                <View style={styles.boton}>
                    <Text style= {styles.textoBoton}>Cancelar Reserva</Text>
                </View>
            </TouchableOpacity>
        </View>

        
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    }, 
   
    titulo:{
        textAlign: 'center',
        fontSize:40,
        marginBottom: 90,
        marginTop:50,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },

    subtitulo:{
        fontSize:20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        
    },

    reserva: {
        marginLeft: 40,
        marginTop: 30,
        marginBottom: 30,
    },

    texto:{
        fontSize: 20
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