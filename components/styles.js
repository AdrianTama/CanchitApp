import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#FFFFFF'
    },

    contenedorSignin: {
        paddingTop: 80,
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    contenedorRegistro: {
        paddingTop: 20,
        backgroundColor: '#FFFFFF'
    },

    contenedorPicker: {
        borderWidth: 1,
        borderRadius: 0,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#5AA877',
    },

    containerBoton: {
        alignItems: 'center',
        marginTop: 10,
    },

    containerIngreso: {
        paddingTop: 15,
        marginTop: 50
    },

    contenedorRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },

    contenedorRowList:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomWidth:1,
        borderColor: 'gray'
    },

    contenedorSubtitulo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:20,
        marginTop: 10,
        marginBottom: 10,
        paddingTop:20,
        paddingBottom: 20,
        backgroundColor: '#4F77A4',
    },
    contenedorMas:{
        justifyContent: 'center',
        paddingRight:30
    },

    botoneraSuperior: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    botoneraInferior: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    boton: {
        width: 300,
        height: 40,
        backgroundColor: '#720876',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 10,
    },

    textoBoton: {
        color: 'white',
        fontSize: 15
    },

    iconoUser: {
        paddingRight: 20,
    },

    iconoMenu: {
        paddingLeft: 20,
    },

    iconoSignin: {
        paddingLeft: 20,
        marginTop: 20
    },

    iconoList: {
        color: "#d6d7da",
        
    },

    iconoDerecho: {
        paddingLeft: 25,
    },

    iconoIzquierdo: {
        paddingRight: 25,
    },

    logo: {
        textAlign: 'center',
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },

    titulo: {
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 90,
        marginTop: 50,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },

    subtitulo: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 30,
        paddingTop: 20,
        paddingBottom:20,
        
    },

    subtituloAdmin:{
        fontSize: 24,
        color: '#d6d7da',
    },

    texto: {
        fontSize: 15,
        textAlign: 'left',
        alignContent: 'center',
        marginTop: 20,
        marginTop: 20,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    dato: {
        fontSize: 10,
        paddingLeft: 20,
    },

    input: {
        borderBottomWidth: 1,
        borderColor: 'gray',
        minWidth: 100,
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,

    },

    itemList: {
        fontSize: 18,
        color: 'gray',
    },

    box: {
        height: 40,
        width: 350,
        borderBottomWidth: 1,
        marginVertical: 30,
        alignContent: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30
    },

    picker: {
        color: 'white',
    },

    link: {
        marginTop: 30,
        fontSize: 18,
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