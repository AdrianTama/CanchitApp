import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';

import BotoneraSuperior from '../components/nombreApp';
import s from '../components/styles';
import { ScrollView } from 'react-native-gesture-handler';

export default function SignIn() {
    const [usuario, onChangeUser] = React.useState('');
    const [clave, onChangeClave] = React.useState('');
    const navigation = useNavigation();

    function ingresar() {
        navigation.navigate("Home");
    };

    function registrarme() {
        navigation.navigate("Registrar Usuario");
    };

    return (
        <ScrollView style={s.contenedorSignin} >
            <BotoneraSuperior />
            <View style={s.containerIngreso}>
                <StatusBar style="auto" />
                <View style={s.contenedorRow}>
                    <Icon
                        name='person'
                        size={20}
                        color='#000'
                        style={s.iconoSignin}
                    />
                    <TextInput
                        style={s.box}
                        onChangeText={text => onChangeUser(text)}
                        value={usuario}
                        placeholder='Ingresa tu usuario'
                    />
                </View>
                <View style={s.contenedorRow}>
                    <Icon
                        name='lock'
                        size={20}
                        color='#000'
                        style={s.iconoSignin}
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={s.box}
                        onChangeText={text => onChangeClave(text)}
                        value={clave}
                        placeholder='Ingresa tu contraseña'
                    />
                </View>

                <TouchableHighlight style={s.containerBoton} onPress={ingresar}>
                    <View style={s.boton}>
                        <Text style={s.textoBoton}>Ingresar</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={s.containerBoton} onPress={registrarme}>
                    <View>
                        <Text style={s.link}>Registrarme</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
}
