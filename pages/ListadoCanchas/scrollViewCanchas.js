import React, { useEffect, useState, useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Row from "./rowCancha";
import Icon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import GlobalContext from '../../components/context';

import s from '../../components/styles';
import BotoneraSuperior from '../../components/botoneraSuperior';

export default function ScrollViewCanchas() {
    const context = useContext(GlobalContext);
    const ip = 'https://secret-shore-39623.herokuapp.com/';
    const [canchas, setCanchas] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {

        const requestOptions = {
            method: "GET",
            headers: {'Authorization': `Bearer ${context.token}`}
        }
        fetch(ip + 'api/canchas', requestOptions)
            .then((response) => response.json())
            .then((json) => setCanchas(json))
            .catch((error) => console.error(error));
    })

    return (
        <ScrollView style={s.container}>
            {
                canchas.map((cancha) => (
                    <Row key={cancha._id} cancha={cancha} />
                ))
            }
        </ScrollView>
    )

}

