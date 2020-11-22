import React, { useState, useEffect, useContext } from 'react';
import { Alert, Text, View, TextInput } from 'react-native';
import { StackActions, useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';
import GlobalContext from '../components/context';

import BotoneraSuperior from '../components/botoneraSuperior';
import s from '../components/styles'
import { ScrollView } from 'react-native-gesture-handler';
import context from '../components/context';


export default function NuevaReserva() {

    const [tarjeta, setTarjeta] = useState([]);
    const [vto, setVto] = useState([]);
    const [cvv, setCvv] = useState([]);
    const context = useContext(GlobalContext);
    const popAction = StackActions.popToTop();

    const [puedeEnviar, setPuedeEnviar] = useState(false)

    const { tipo, dia, hora, nroCancha, precio } = useRoute().params;
    const navigation = useNavigation();
    const ip = 'https://fast-tor-75300.herokuapp.com/';

    // Validacion de boton enviar
    useEffect(() => {

        setPuedeEnviar(tarjeta.length == 16 && vto.length == 5 && cvv.length == 3)

    }, [tarjeta, vto, cvv])

    function pagar() {
        if (puedeEnviar == true) {
            Alert.alert(
                "Confirmar pago y reserva",
                "Usted seleccionó la " + tipo + ' número ' + nroCancha + ' para el día '
                + dia.substring(0, 10) + ' a las ' + hora + ':00hs por un valor de $' + precio + '. ¿Confirma el pago?',
                [
                    {
                        text: "Cancelar",
                        onPress: console.log('Yes Pressed'),
                    },
                    {
                        text: "Confirmar", onPress: guardarReserva
                    }
                ],
                { cancelable: false })
        } else {
            Alert.alert(
                "Error",
                "¡Corroborar los datos ingresados!",
                [{
                    text: "Cancelar", 
                    onPress: console.log('Yes Pressed'),
                }]
            )
        }


    };

    async function guardarReserva() {
        const headers = new Headers();

        headers.append("Content-type", "application/json")

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                nroCancha: nroCancha,
                dia: dia,
                hora: hora,
                suspendida: false,
                email: context.usuario.email
            })
        }

        let response = await fetch(ip + 'api/reservas/agregarReserva/', requestOptions)
            .then((res) => res.json())
            .catch(err => {
                console.log("Error: ", err)
            })
        
        if(response.dia === undefined){
            Alert.alert("Error", "La cancha no se encuentra disponible en esa fecha y hora.")
        }else{
            context.cambioDatos(context.usuario, context.token, 'nueva reserva', context.objetoReserva);
            navigation.dispatch(popAction);
            navigation.navigate("Home");
        }
        
    }


    return (
        <ScrollView style={s.container}>
            <BotoneraSuperior />
            <Text style={s.subtitulo}>Pago con Tarjeta de Crédito</Text>
            <Text style={s.dato}>Número</Text>
            <TextInput
                style={s.input}
                placeholder="Número"
                onChangeText={(texto) => setTarjeta(texto)}
                keyboardType="numeric"
            />
            <Text style={s.dato}>Vencimiento</Text>
            <TextInput
                style={s.input}
                placeholder="Vencimiento"
                onChangeText={(texto) => setVto(texto)}
                keyboardType="numbers-and-punctuation"
            />
            <Text style={s.dato}>CVV</Text>
            <TextInput
                style={s.input}
                placeholder="Código de Seguridad"
                onChangeText={(texto) => setCvv(texto)}
                keyboardType="numeric"
            />
            <Text style={s.dato}>Precio</Text>
            <TextInput
                style={s.input}
                value={'$' + precio}
            />

            <View style={s.botoneraInferior}>
                <Icon
                    name='x'
                    size={40}
                    color='#000'
                    style={s.iconoDerecho}
                    onPress={() => navigation.goBack()}
                />
                <Icon
                    name='check'
                    size={40}
                    color='#000'
                    style={s.iconoIzquierdo}
                    onPress={() => pagar()}
                />
            </View>

        </ScrollView>
    )
}
