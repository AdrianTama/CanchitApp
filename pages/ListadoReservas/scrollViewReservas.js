import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import Row from "./rowReserva";
import GlobalContext from '../../components/context';

import s from '../../components/styles';


export default function ScrollViewTurnos() {
    const context = useContext(GlobalContext);
    const ip = 'https://secret-shore-39623.herokuapp.com/';
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
      const requestOptions = {
          method: "GET",
          headers: { 'Authorization': `Bearer ${context.token}` }
      }
      fetch(ip + 'api/reservas', requestOptions)
          .then((response) => response.json())
          .then((json) => setReservas(json))
          .catch((error) => console.error(error));
    })

    return (
        <ScrollView style={s.container}>
          {reservas.map((reserva) => (<Row key={reserva._id} reserva={reserva} />)) }
        </ScrollView>
    )

}

