import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';

import s from '../../components/styles'

export default function Row({ cancha }) {
    const navigation = useNavigation();
    const ip = 'https://secret-shore-39623.herokuapp.com/';

    function verCancha() {
        navigation.navigate('Editar Cancha', { cancha })
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
        
        if (eliminacion) {
            console.log("No se pudo modificar.")
        } else {
            Alert.alert("La cancha se eliminó con éxito.")
        }
    }

    return (
        <View style={s.contenedorRowList}>
            <Text style={s.itemList} onPress={verCancha}>Cancha número {cancha.numero}</Text>
            <View style={s.contenedorMas}>
                <Icon
                    name='trashcan'
                    size={24}
                    color='#000'
                    style={s.iconoList}
                    onPress={eliminar}
                />
                <Icon
                    name='chevron-right'
                    size={24}
                    color='#000'
                    style={s.iconoList}
                    onPress={verCancha}
                />
            </View>

        </View>
    )
}