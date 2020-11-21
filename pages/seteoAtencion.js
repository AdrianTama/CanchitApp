import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TextInput, Picker, Alert, Switch } from 'react-native';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';

import BotoneraSuperior from '../components/botoneraSuperior';
import s from '../components/styles';
import { ScrollView } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';


export default function SeteoAtencion() {
    const [horaIni, setHoraIni] = useState("");
    const [horaFin, setHoraFin] = useState("");
    const [diaElegido, setDiaElegido] = useState([]);
    const [atencion, setAtencion] = useState("");

    const [puedeEnviar, setPuedeEnviar] = useState(false)
    const navigation = useNavigation();
    const ip = 'https://secret-shore-39623.herokuapp.com/';

    const [lunes, setLunes] = useState(false);
    const toggleSwitchLunes = () => setLunes(previousState => !previousState);
    const [martes, setMartes] = useState(false);
    const toggleSwitchMartes = () => setMartes(previousState => !previousState);
    const [miercoles, setMiercoles] = useState(false);
    const toggleSwitchMiercoles = () => setMiercoles(previousState => !previousState);
    const [jueves, setJueves] = useState(false);
    const toggleSwitchJueves = () => setJueves(previousState => !previousState);
    const [viernes, setViernes] = useState(false);
    const toggleSwitchViernes = () => setViernes(previousState => !previousState);
    const [sabado, setSabado] = useState(false);
    const toggleSwitchSabado = () => setSabado(previousState => !previousState);
    const [domingo, setDomingo] = useState(false);
    const toggleSwitchDomingo = () => setDomingo(previousState => !previousState);

    // Validacion de boton enviar
    useEffect(() => {

        setPuedeEnviar(horaIni != "" && horaFin != '0')

    }, [horaFin, horaIni])

    async function guardarAtencion() {

        if (puedeEnviar) {

            //Fetch para el horario
            const headers = new Headers();
            headers.append("Content-type", "application/json")
            //Conformación de componentes para el fetch
            const requestOptions = {
                method: "PUT",
                // headers: {'Authorization': `Bearer ${context.token}`},
                headers: headers,
                body: JSON.stringify({
                    horarioDeInicio: horaIni,
                    horarioDeCierre: horaFin,
                })
            }

            //Almacenamos el response del fetch
            let response = await fetch(ip + 'api/horariosAtencion/modificarHorario', requestOptions)
                .then((res) => res.json())
                .catch(err => {
                    console.log("Error: ", err)
                })
            console.log(response)
            //Dependiendo el response, mostramos un msj    
            if (response === true) {
                Alert.alert("Horario modificado con éxito")
            } else {
                Alert.alert("Error", "No se pudo modificar el horario.")
            }

        } else {
            //Mensaje de error cuando falta algún campo o hay algún campo inválido
            Alert.alert(
                "Error",
                "¡Revisar los campos completados!",
                [{
                    text: "Cancelar",
                    onPress: console.log('Yes Pressed'),
                }]
            )
        }

    }

    useEffect(() => {
        //adaptar con ip de la compu que ejecute: http://ip:3000/api...
        const requestOptions = {
            method: "GET",
            // headers: {'Authorization': `Bearer ${context.token}`},
        }

        fetch(ip + 'api/horariosAtencion/', requestOptions)
            .then((response) => response.json())
            .then((json) => setAtencion(json))
            .catch((error) => console.error(error));

        setHoraIni(atencion.horarioDeInicio);
        setHoraFin(atencion.horarioDeCierre);
    }, []);


    return (
        <ScrollView style={s.container}>
            <BotoneraSuperior />
            <View style={s.contenedorSubtitulo}>
                <Text style={s.subtituloAdmin} >Horarios y días de atención</Text>
            </View>
            <View style={s.contenedorRegistro}>
                <Text style={s.dato}>Horario de apertura:</Text>
                <TextInput
                    style={s.input}
                    value={horaIni}
                    placeholder="Horario de inicio"
                    onChangeText={(input) => setHoraIni(input)}
                    keyboardType="numeric"
                    editable={true}
                />
                <Text style={s.dato}>Horario de cierre:</Text>
                <TextInput
                    style={s.input}
                    value={horaFin}
                    placeholder="Horario de cierre"
                    onChangeText={(input) => setHoraFin(input)}
                    keyboardType="numeric"
                />

                <Text style={s.dato}>Seleccionar los días de atención:</Text>
                <View style={s.contenedorRegistro}>
                    <View style={s.contenedorSwitch}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#3ca602" }}
                            thumbColor={lunes ? "#daf5cb" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchLunes}
                            value={lunes}
                        />
                        <Text>Lunes</Text>
                    </View>
                    <View style={s.contenedorSwitch}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#3ca602" }}
                            thumbColor={martes ? "#daf5cb" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchMartes}
                            value={martes}
                        />
                        <Text>Martes</Text>
                    </View>
                    <View style={s.contenedorSwitch}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#3ca602" }}
                            thumbColor={miercoles ? "#daf5cb" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchMiercoles}
                            value={miercoles}
                        />
                        <Text>Miércoles</Text>
                    </View>

                    <View style={s.contenedorSwitch}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#3ca602" }}
                            thumbColor={jueves ? "#daf5cb" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchJueves}
                            value={jueves}
                        />
                        <Text>Jueves</Text>
                    </View>
                    <View style={s.contenedorSwitch}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#3ca602"}}
                            thumbColor={viernes ? "#daf5cb" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchViernes}
                            value={viernes}
                        />
                        <Text>Viernes</Text>
                    </View>
                    <View style={s.contenedorSwitch}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#3ca602" }}
                            thumbColor={sabado ? "#daf5cb" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchSabado}
                            value={sabado}
                        />
                        <Text>Sábado</Text>
                    </View>

                    <View style={s.contenedorSwitch}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#3ca602"}}
                            thumbColor={domingo ? "#daf5cb" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchDomingo}
                            value={domingo}
                        />
                        <Text>Domingo</Text>
                    </View>

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
                        onPress={() => guardarAtencion()}
                    />
                </View>
            </View>
        </ScrollView>
    )
}
