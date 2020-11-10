import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },

    contenedorSignin:{
        paddingTop: 150,
        flex: 1,
        marginTop: 20,
    },

    contenedorRegistro:{
        flex: 1,
        marginTop: 15,
        paddingTop: 80
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

    containerBoton:{
        alignItems: 'center',
        marginTop:10,
    },

    containerIngreso:{
        paddingTop: 50,
        marginTop:20
    },

    contenedorRow:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        marginBottom:60
    },

    botoneraSuperior:{
        marginTop:20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    botoneraInferior: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
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

    iconoUser:{
        paddingRight : 20, 
    },

    iconoMenu:{
        paddingLeft : 20, 
    },

    iconoSignin:{
        paddingLeft : 20, 
        marginTop:20
    },

    iconoDerecho:{
        paddingLeft : 25, 
    },

    iconoIzquierdo:{
        paddingRight : 25, 
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
        marginBottom: 30,
        marginTop:30
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
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
       
    },

    box: {
        height:40,
        width: 350,
        borderBottomWidth: 1,
        marginVertical: 30,
        alignContent: 'center',
        marginLeft: 20,
        marginRight:20,
        marginTop:50
    },

    picker: {
        color: 'white',
    },

    link: {
        marginTop: 30,
        fontSize:18,
        color: '#33A8FF',
        paddingVertical: 5,
    },

    reserva: {
        marginLeft: 40,
        marginTop: 30,
        marginBottom: 30,
    },
  })

  export default styles;