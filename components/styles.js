import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },

    botoneraSuperior:{
        marginTop:20,
        marginBottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    botoneraInferior: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    iconoUser:{
        paddingRight : 20, 
    },

    iconoMenu:{
        paddingLeft : 20, 
    },

    iconoDerecho:{
        paddingLeft : 25, 
    },

    iconoIzquierdo:{
        paddingRight : 25, 
    },

    contenedorPicker:{
        borderWidth:1, 
        borderRadius:0,
        marginLeft:20, 
        marginRight:20,
        marginTop:10,
        marginBottom:10,
        backgroundColor: '#5AA877',
    },
    picker: {
        color: 'white',
    },

    logo:{
        textAlign: 'center',
        fontSize:30,
        fontStyle: 'italic',
        fontWeight: 'bold',
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

    texto:{
        fontSize:15,
        textAlign: 'left',
        alignContent: 'center',
        marginTop:20,
        marginTop: 20,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    dato:{
        fontSize:10,
        paddingLeft : 20, 
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

    link: {
        marginLeft:20,
        marginTop: 30,
        fontSize:18,
        color: '#33A8FF',
        paddingVertical: 5,
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

    reserva: {
        marginLeft: 40,
        marginTop: 30,
        marginBottom: 30,
    },
  })

  
  export default styles;