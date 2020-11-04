import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Picker, StyleSheet, Text , View, TouchableHighlight} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';

//creé un componente con el stylesheet para llamarlo cada vez que lo necesitamos así no repetimos código en cada componente
import s from '../components/styles'
import BotoneraSuperior from '../components/botoneraSuperior';
//creé componentes distintos para cada picker
import ListadoTipoCanchas from '../components/listadoTipoCanchas';
import ListadoCanchas from '../components/listadoCanchas';
import ListadoDias from '../components/listadoDias';
import ListadoHorarios from '../components/listadoHorarios';


//Ver cómo comunicamos los componentes con los ítems que va seleccionando el usuario
//Tiene que renderizar cada vez que el usuario selecciona un ítem para que cargue los turnos disponibles

export default function NuevaReserva(){

    const [tipoElegido, setTipoElegido]= React.useState("0");
    const [diaElegido, setDiaElegido] = React.useState("0");
    const [horarioElegido, setHorarioElegido] = React.useState("0");
    const navigation = useNavigation(); 

    function reservar(){

    }

    /* function reservar(){
        navigation.navigate("Mi Reserva", {
            dia: diaElegido,
            hora: horarioElegido,
            cancha: tipoElegido} );
    };

    function useEffect(){() => {

        setPuedeEnviar(tipoElegido !=0 && diaElegido!=0 && horarioElegido!=0 )
        
    }, [tipoElegido, diaElegido, horarioElegido]} */

    return (
        <View style={s.container} >
            <BotoneraSuperior/>
            <Text style={s.subtitulo}>Nueva Reserva</Text>
            
            <Text style= {s.texto}>Paso 1: Elegí el tipo de cancha</Text>
            <ListadoTipoCanchas/>

            <Text style= {s.texto}>Paso 2: Elegí la cancha</Text>
            <ListadoCanchas />
            
            <Text style= {s.texto}>Paso 3: Elegí el día</Text>
            <ListadoDias/>

            <Text style= {s.texto}>Paso 4: Elegí el horario</Text>
            <ListadoHorarios/>

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
                onPress={reservar}
                />
            </View>
            
           
        </View>
    );
  }

  