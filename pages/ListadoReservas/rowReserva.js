import React, { useContext } from 'react';
import { Alert, Text, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import GlobalContext from '../../components/context';

import s from '../../components/styles'

export default function Row({ reserva }) {
    const context = useContext(GlobalContext);
    const navigation = useNavigation();
    const ip = 'https://secret-shore-39623.herokuapp.com/';

    function confirmarSuspender() {
    Alert.alert(
        "¿Confirmar suspender reserva? ",
        "¿Está seguro de que quiere suspender la reserva?",
        [
            {
                text: "Cancelar",
                onPress: console.log('Yes Pressed'),
            },
            {
                text: "Confirmar", onPress: suspender
            }
        ],
        { cancelable: false })
    }

    async function suspender() {
        const id = reserva._id;
        const headers = new Headers();
        headers.append("Content-type", "application/json")

        const requestOptions = {
            method: "PUT",
            headers: headers,
        }

        let suspencion = await fetch(ip + 'api/reservas/suspender/' + id, requestOptions)
            .then((res) => res.json())
            .catch(err => {
                console.log("Error: ", err)
            })

        if (suspencion.result.nModified === 0) {
            Alert.alert("La reserva no se pudo suspender")
        } else {
            Alert.alert("La reserva se suspendió")
        }

    }

    return (
      <View style={s.contenedorMenuLateral}>
      <View style={s.contenedorListado}>
          <View>
              <Text style={s.itemList}>Número de cancha: {reserva.nroCancha}</Text>
              <Text style={s.itemList}>Día: {reserva.dia.toString().substring(0,10)}</Text>
              <Text style={s.itemList}>Hora: {reserva.hora}</Text>
              <Text style={s.itemList}>Suspendida: {reserva.suspendida.toString()}</Text>
              <Text style={s.itemList}>Email: {reserva.email}</Text>
          </View>
      </View>
      <View style={s.botoneraDerecha}>
          <TouchableHighlight underlayColor='rgba(154, 154, 154, 0,2'>
              <Icon
                  name='cancel'
                  size={30}
                  color='#000'
                  style={s.iconoEditar}
                  onPress={confirmarSuspender}
              />
          </TouchableHighlight>
      </View>
  </View>
    )
}