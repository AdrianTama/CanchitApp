import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Picker, StyleSheet, Text , View, TouchableHighlight} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Canchitapp from '../components/canchitapp';

export default function NuevaReserva(){

    const [tipoElegido, setTipoElegido] = React.useState(" ");
    const [diaElegido, setDiaElegido] = React.useState(" ");
    const [horarioElegido, setHorarioElegido] = React.useState(" ");
    const navigation = useNavigation(); 

    function reservar(){
        navigation.navigate("Mi Reserva", {
            dia: diaElegido,
            hora: horarioElegido,
            cancha: tipoElegido} );
    };

    return (
        <View style={styles.container} >
            <Canchitapp/>
            <StatusBar style = "auto" />
            
            <Text style= {styles.texto}>Paso 1: Elegí el tipo de cancha</Text>
            <Picker
                selectedValue={tipoElegido}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setTipoElegido(itemValue)}
            >
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
                <Picker.Item label="01/11/2020" value="01/11/2020" />
                <Picker.Item label="02/11/2020" value="02/11/2020" />
                <Picker.Item label="03/11/2020" value="03/11/2020" />
            </Picker>

            <Text style= {styles.texto}>Paso 2: Elegí el horario</Text>
            <Picker
                selectedValue={horarioElegido}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setHorarioElegido(itemValue)}
            >
                <Picker.Item label="11:00" value="11:00" />
                <Picker.Item label="12:00" value="12:00" />
                <Picker.Item label="13:00" value="13:00" />
            </Picker>
            
            

           <TouchableHighlight style={styles.containerBoton} onPress={reservar}>
                <View style={styles.boton}>
                    <Text style= {styles.textoBoton}>Reservar</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.containerBoton} onPress={() => navigation.goBack()}>
                <View style={styles.boton}>
                    <Text style= {styles.textoBoton}>Volver</Text>
                </View>
            </TouchableHighlight>
           
           
        </View>
    );
  }

  const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
    ,
    container: {
        flex: 1,
        paddingTop: 80,
        
    },

    picker: {
        height: 50, 
        width: 300,
        fontSize: 15,
        marginBottom: 20,
        marginLeft: 20,
    },

    titulo:{
        textAlign: 'center',
        fontSize:40,
        marginBottom: 90,
        marginTop:50,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },

    texto:{
        fontSize:20,
        textAlign: 'left',
        alignContent: 'center',
        marginLeft: 20,
    },

    containerBoton:{
        alignItems: 'center',
    },

    boton:{
        width:300,
        height: 40,
        backgroundColor: '#720876',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
        marginBottom: 10,
        borderWidth:1,
        borderRadius:10,
    },

    textoBoton:{
        color: 'white',
        fontSize:15
    },
  })