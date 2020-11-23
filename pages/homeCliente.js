import React, { useEffect, useState, useContext } from 'react';
import { Picker, Text, View, TouchableHighlight, Image } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import BotoneraSuperior from '../components/botoneraSuperior';
import { ScrollView } from 'react-native-gesture-handler';
import GlobalContext from '../components/context';

import s from '../components/styles'

export default function Home() {

    const ip = 'https://secret-shore-39623.herokuapp.com/';
    const navigation = useNavigation();
    const context = useContext(GlobalContext);
    const [response, setResponse] = useState("");
    const isFocused = useIsFocused();


    function chequeoReserva() {
        setResponse(context.objetoReserva)
        if (response != false) {
            navigation.navigate("Mi Reserva", {reserva: response});
        } else {
            navigation.navigate("Nueva Reserva");
        }
    }


    return (
        <ScrollView style={s.container} >
            <BotoneraSuperior />

            <View style={s.contenedorImagen}>
                <Image
                    style={s.imagenHome}
                    source={{
                        uri: 'https://www.futbolsalou.com/content/imgsxml/panel_destacadocampos/imagen1965.png',
                    }}
                />
            </View>

            <View style={s.botonera}>
                <TouchableHighlight style={s.containerBotonHome} onPress={() => chequeoReserva()}>
                    <View style={s.boton}>
                    {response === false ?
                    <Text style={s.textoBoton}>Reservar Cancha</Text>
                    :
                    <Text style={s.textoBoton}>Mi Reserva</Text>
                    }
                        
                    </View>
                </TouchableHighlight>


            </View>

        </ScrollView >
    );
}