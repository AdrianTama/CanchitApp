import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function suspenderReserva({ reserva }) {
    const navigation = useNavigation();
    const ip = 'https://secret-shore-39623.herokuapp.com/';

    async function eliminar() {
        const id = reserva._id;

        const headers = new Headers();

        headers.append("Content-type", "application/json")

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                id: id,
            })
        }

        let eliminacion = await fetch(ip + 'api/reservas/' + id, requestOptions)
            .then((res) => res.json())
            .catch(err => {
                console.log("Error: ", err)
            })
        Alert.alert("La reserva se suspendió con éxito.")

    }
}