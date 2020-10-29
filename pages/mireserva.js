import React from 'react';
import { Picker, StyleSheet, Text , View, TouchableHighlight} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Canchitapp from '../components/canchitapp'

export default function MiReserva(){

    const navigation = useNavigation(); 
    const {dia, hora, cancha } = useRoute().params;
    

    return (
        <View style={styles.container} >
            <Canchitapp/>
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
        </View>

        
    );
  }

  const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },

    container: {
        flex: 1,
        paddingTop: 80,
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
        fontSize:25,
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