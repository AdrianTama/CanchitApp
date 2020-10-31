import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Picker, StyleSheet, Text , View, TouchableHighlight} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';

import BotoneraSuperior from '../components/botoneraSuperior';


export default function NuevaReserva(){

    const [tipoElegido, setTipoElegido] = React.useState("0");
    const [diaElegido, setDiaElegido] = React.useState("0");
    const [horarioElegido, setHorarioElegido] = React.useState("0");
    const navigation = useNavigation(); 

    function reservar(){
        navigation.navigate("Mi Reserva", {
            dia: diaElegido,
            hora: horarioElegido,
            cancha: tipoElegido} );
    };

    function useEffect(){() => {

        setPuedeEnviar(tipoElegido !=0 && diaElegido!=0 && horarioElegido!=0 )
        
    }, [tipoElegido, diaElegido, horarioElegido]}

    return (
        <View style={styles.container} >
            <BotoneraSuperior/>
            <Text style={styles.subtitulo}>Nueva Reserva</Text>
            
            <Text style= {styles.texto}>Paso 1: Elegí el tipo de cancha</Text>
            <Picker
                selectedValue={tipoElegido}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setTipoElegido(itemValue)}
            >
                <Picker.Item label="Seleccionar tipo de cancha" value="0" />
                <Picker.Item label="Cancha Fútbol 5" value="Fútbol 5" />
                <Picker.Item label="Cancha Fútbol 7" value="Fútbol 7" />
                <Picker.Item label="Cancha Fútbol 11" value="Fútbol 11" />
            </Picker>

            <Text style= {styles.texto}>Paso 2: Elegí el día</Text>
            <Picker
                selectedValue={diaElegido}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setDiaElegido(itemValue)}
            >
                <Picker.Item label="Seleccionar día" value="0" />
                <Picker.Item label="01/11/2020" value="01/11/2020" />
                <Picker.Item label="02/11/2020" value="02/11/2020" />
                <Picker.Item label="03/11/2020" value="03/11/2020" />
            </Picker>

            <Text style= {styles.texto}>Paso 3: Elegí el horario</Text>
            <Picker
                selectedValue={horarioElegido}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setHorarioElegido(itemValue)}
            >
                <Picker.Item label="Seleccionar horario" value="0" />
                <Picker.Item label="11:00" value="11:00" />
                <Picker.Item label="12:00" value="12:00" />
                <Picker.Item label="13:00" value="13:00" />
            </Picker>

            <View style={styles.botoneraInferior}>
                <Icon 
                name='x' 
                size={40} 
                color='#000' 
                style= {styles.iconoDerecho}
                onPress={() => navigation.goBack()}
                />
                <Icon 
                name='check' 
                size={40} 
                color='#000' 
                style= {styles.iconoIzquierdo}
                onPress={reservar}
                />
            </View>
            
           
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        
    },

    botoneraInferior: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    iconoDerecho:{
        paddingLeft : 20, 
    },

    iconoIzquierdo:{
        paddingRight : 20, 
    },

    picker: {
        minWidth: 100,
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
        borderWidth:1,
        borderColor: 'black'
    },

    titulo:{
        textAlign: 'center',
        fontSize:40,
        marginBottom: 90,
        marginTop:50,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },

    subtitulo:{
        fontSize:20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        
    },

    texto:{
        fontSize:15,
        textAlign: 'left',
        alignContent: 'center',
        marginTop:20,
        marginTop: 20,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
  })