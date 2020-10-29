import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';
import CanchitApp from '../components/canchitapp';
import { useNavigation } from '@react-navigation/native';


export default function App() {

    const [canchas, setCanchas] = useState(canchas)

    const [mostrarCanchas, setFlag] = useState(true);

    const guardarCancha = ({descripcion, numero}) => {
        console.log(descripcion, numero)
        setCanchas([...contacts, {
        descripcion, numero, key: canchas.length
    }])

    setFlag(false)

    }


    return (

        <View style={styles.container}>
        <CanchitApp/>
        <Text style={styles.subtitulo}>Lista de canchas</Text>

        {(mostrarCanchas) ?
            <AgregarCancha guardarCancha={guardarCancha} />
            :
            <View>
                <View>
                    <Text styles>Listado de canchas</Text>
                </View>
        
                <FlatListContact contactos={contacts} />
         
            </View>
        }
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight
    // alignItems: 'center',
    // justifyContent: 'center',
   },
  row: {
    padding: 15
  },
  subtitulo:{
    fontSize:25,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    
},
});

// línea 115
// {/* <ScrollViewContact canchas={canchas} /> */}

//línea 119
// {/* <SectionListCancha canchas={canchas} /> */}