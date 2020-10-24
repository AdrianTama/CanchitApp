import React from 'react';
import { Picker, StyleSheet, Text , View, TouchableHighlight, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home(){

    const navigation = useNavigation(); 

    return (
        <View style={styles.container} >
            <Text style={styles.titulo}>CanchitApp</Text>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        marginBottom: 80,
    },

    titulo:{
        textAlign: 'center',
        fontSize:40,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
  
  })