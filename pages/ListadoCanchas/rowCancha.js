import React, { useState, useEffect, useContext } from 'react';
import { Alert, Text, View, TextInput, Button, TouchableHighlight, Picker } from 'react-native';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Octicons';

import BotoneraSuperior from '../../components/botoneraSuperior';
import s from '../../components/styles'
import eliminarCancha from './eliminarCancha'

export default function Row({ cancha }) {
    const navigation = useNavigation();
    const ip = 'https://secret-shore-39623.herokuapp.com/';

    function editar() {
        navigation.navigate('Editar Cancha', { cancha })
    }

    function confirmarEliminar() {
        Alert.alert(
            "Confirmar eliminación de cancha",
            "¿Está seguro de que quiere eliminar la cancha número " + cancha.numero + "?",
            [
                {
                    text: "Cancelar",
                    onPress: console.log('Yes Pressed'),
                },
                {
                    text: "Confirmar", onPress: eliminar
                }
            ],
            { cancelable: false })
    }

    async function eliminar() {
        const id = cancha._id;

        const headers = new Headers();

        headers.append("Content-type", "application/json")

        const requestOptions = {
            method: "DELETE",
            headers: headers,
            body: JSON.stringify({
                id: id,
            })
        }

        let eliminacion = await fetch(ip + 'api/canchas/' + id, requestOptions)
            .then((res) => res.json())
            .catch(err => {
                console.log("Error: ", err)
            })

        if (eliminacion === true) {
            Alert.alert("La cancha se eliminó con éxito.")
        } else {
            Alert.alert("La cancha no se pudo eliminar")
        }

    }

    return (
        <View style={s.contenedorMenuLateral}>
            <View style={s.contenedorListado}>
                <View>
                    <Text style={s.itemList}>Número de cancha: {cancha.numero}</Text>
                    <Text style={s.itemList}>{cancha.descripcion}</Text>
                    <Text style={s.itemList}>Precio de reserva : ${cancha.precio}</Text>
                </View>
            </View>
            <View style={s.botoneraDerecha}>
                <TouchableHighlight underlayColor='rgba(154, 154, 154, 0,2'>
                    <Icon
                        name='trashcan'
                        size={30}
                        color='#000'
                        style={s.iconoEditar}
                        onPress={confirmarEliminar}
                    />
                </TouchableHighlight>
                <TouchableHighlight underlayColor = '#008b8b'>
                    <Icon
                        name='pencil'
                        size={30}
                        color='#000'
                        style={s.iconoEditar}
                        onPress={editar}
                    />
                </TouchableHighlight>
            </View>

        </View>
    )
}