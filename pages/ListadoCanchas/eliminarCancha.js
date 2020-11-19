import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function EliminarCancha({ cancha }) {
    const navigation = useNavigation();
    const ip = 'https://secret-shore-39623.herokuapp.com/';

    function confirmacionEliminar() {
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


        Alert.alert("La cancha se eliminó con éxito.")

    }
}