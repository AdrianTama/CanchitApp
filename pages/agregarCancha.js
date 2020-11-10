import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, TouchableHighlight, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';

import BotoneraSuperior from '../components/botoneraSuperior';
import s from '../components/styles';


const AgregarCancha = () => {

    const [numero, setNumero] = useState("");
    const [tipo, setTipo] = useState("0");
    const [precio, setPrecio] = useState("");

    const [puedeEnviar, setPuedeEnviar] = useState(false)

    const navigation = useNavigation();

    // Validacion de boton enviar
    useEffect(() => {

        setPuedeEnviar(numero != "" && tipo != '0' && precio !="")

    }, [precio, numero, tipo])

    const guardarCancha = () => {
        console.log("cancha guardada", precio, numero, tipo)
    }

    return (
        <View style={s.container}>
            <BotoneraSuperior />
            <Text style={s.subtitulo}>Agregar Cancha</Text>
            <TextInput
                style={s.input}
                value={numero}
                placeholder="Número"
                onChangeText={(texto) => setNumero(texto)}
                keyboardType="numeric"
            />
            <TextInput
                style={s.input}
                value={precio}
                placeholder="Precio"
                onChangeText={(texto) => setPrecio(texto)}
                keyboardType="numeric"
            />
            <View style={s.contenedorPicker}>
                <Picker
                    selectedValue={tipo}
                    style={s.picker}
                    placeholder='Selecciona un tipo de cancha'
                    onValueChange={(itemValue, itemIndex) => {
                        setTipo(itemValue);
                    }}
                >
                    <Picker.Item label="Seleccionar tipo de cancha" value="0" />
                    <Picker.Item label="Cancha Futbol 5" value="5" />
                    <Picker.Item label="Cancha Futbol 7" value="7" />
                    <Picker.Item label="Cancha Futbol 11" value="11" />
                </Picker>
            </View>
            
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
                    onPress={() => guardarCancha({ descripcion, numero, tipo })}
                />
            </View>
        </View>
    )
}

export default AgregarCancha;