import React, { useContext } from 'react';
import { Alert, Text, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import GlobalContext from '../../components/context';

import s from '../../components/styles'

export default function Row({ reserva }) {
    const context = useContext(GlobalContext);
    const navigation = useNavigation();
    const ip = 'https://secret-shore-39623.herokuapp.com/';

    function verReserva(){
        navigation.navigate('Ver Reserva', { reserva })
    }

    function confirmarSuspender() {
    Alert.alert(
        "¿Confirmar eliminar reserva? ",
        "¿Está seguro de que quiere eliminar la reserva número " + reserva.numero + "?",
        [
            {
                text: "Cancelar",
                onPress: console.log('Yes Pressed'),
            },
            {
                text: "Confirmar", onPress: suspender
            }
        ],
        { suspendida: false })
    }

    async function suspender() {
        const id = reserva._id;

        const headers = new Headers();

        headers.append("Content-type", "application/json")

        const requestOptions = {
            method: "PUT",
            headers: headers,
            body: JSON.stringify({
                id: id,
            })
        }

        let suspencion = await fetch(ip + 'api/reservas/suspender/' + id, requestOptions)
            .then((res) => res.json())
            .catch(err => {
                console.log("Error: ", err)
            })

        if (suspencion === true) {
            Alert.alert("La reserva se suspendió")
        } else {
            Alert.alert("La reserva no se pudo suspender")
        }

    }

    return (
      <View style={s.contenedorMenuLateral}>
      <View style={s.contenedorListado}>
          <View>
              <Text style={s.itemList}>Número de cancha: {reserva.nroCancha}</Text>
              <Text style={s.itemList}>Día: {reserva.dia}</Text>
              <Text style={s.itemList}>Hora: {reserva.hora}</Text>
              <Text style={s.itemList}>Suspendida: {reserva.suspendida}</Text>
              <Text style={s.itemList}>Email: {reserva.email}</Text>
          </View>
      </View>
      <View style={s.botoneraDerecha}>
          <TouchableHighlight underlayColor='rgba(154, 154, 154, 0,2'>
              <Icon
                  name='trashcan'
                  size={30}
                  color='#000'
                  style={s.iconoEditar}
                  onPress={confirmarSuspender}
              />
          </TouchableHighlight>
          <TouchableHighlight underlayColor = '#008b8b'>
              <Icon
                  name='pencil'
                  size={30}
                  color='#000'
                  style={s.iconoEditar}
                  onPress={verReserva}
              />
          </TouchableHighlight>
      </View>
  </View>
    )
}