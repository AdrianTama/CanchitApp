import React, { useState, useEffect } from 'react';
import { Alert, Text, View, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';

import BotoneraSuperior from '../components/botoneraSuperior';
import s from '../components/styles'


export default function NuevaReserva() {

    const [tarjeta, setTarjeta] = useState([]);
    const [vto, setVto] = useState([]);
    const [cvv, setCvv] = useState([]);

    const [puedeEnviar, setPuedeEnviar] = useState(false)

    const {dia, hora, cancha, precio } = useRoute().params;
    const navigation = useNavigation(); 
    const ip = 'http://192.168.0.117:3000/';

    // Validacion de boton enviar
    useEffect( () => {

        setPuedeEnviar(tarjeta.length == 16 && vto.length == 5 && cvv.length == 3 )
        
    }, [tarjeta, vto, cvv])

    function pagar() {
        if (puedeEnviar == true) {
            Alert.alert(
                "Confirmar pago",
                "¿Confirma el pago por $"+precio+'?',
                [
                    {
                        text: "Cancelar",
                        onPress: console.log('Yes Pressed'),
                    },
                    { text: "Confirmar", onPress: guardarReserva }
                ],
                { cancelable: false }
            );
        } else {
            Alert.alert(
                "Error",
                "¡Corroborar los datos ingresados!",
                [{
                    text: "Cancelar", onPress: console.log('Yes Pressed'),
                }]
            )
        }


    };

    function guardarReserva() {

        fetch(ip + 'api/reservas/agregarReserva/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nroCancha: cancha,
                dia: dia,
                hora: hora,
                suspendida: false
            })
        })

        /* navigation.navigate("Mi Reserva", {
            dia: diaElegido,
            hora: horarioElegido,
            cancha: canchaElegida
        }); */
    }


    return (
        <View style={s.container}>
            <BotoneraSuperior/>
            <Text style={s.subtitulo}>Pago con Tarjeta de Crédito</Text>
            <Text style={s.dato}>Número</Text>
            <TextInput
                style={s.input}
                placeholder="Número"
                onChangeText={(texto)=>setTarjeta(texto)}
            />
            <Text style={s.dato}>Vencimiento</Text>
            <TextInput
                style={s.input}
                placeholder="Vencimiento"
                onChangeText={(texto) => setVto(texto)}                
            />
            <Text style={s.dato}>CVV</Text>
            <TextInput
                style={s.input}
                placeholder="Código de Seguridad"
                onChangeText={(texto) => setCvv(texto)}            
            />
            <Text style={s.dato}>Precio</Text>
            <TextInput
                style={s.input}
                value={'$'+precio}         
            />

            <View style={s.botoneraInferior}>
                <Icon 
                name='x' 
                size={40} 
                color='#000' 
                style= {s.iconoDerecho}
                onPress={() => navigation.goBack()}
                />
                <Icon 
                name='check' 
                size={40} 
                color='#000' 
                style= {s.iconoIzquierdo}
                onPress={() => pagar()}
                />
            </View>

        </View>
    )
}
