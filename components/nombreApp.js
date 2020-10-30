import React from 'react';
import { Text , View, StyleSheet } from 'react-native';


export default function NombreApp(){

    return (
        <View>
            <Text style={styles.titulo}>CanchitApp</Text>
        </View>
    );
  }

  const styles = StyleSheet.create({
    titulo:{
        textAlign: 'center',
        fontSize:30,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
  })