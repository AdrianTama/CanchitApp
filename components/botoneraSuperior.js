import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import IconoMenu from './iconoMenu';
import IconoUser from './iconoUser';
import NombreApp from './nombreApp';

export default function BotoneraSuperior(){

    const navigation = useNavigation(); 

    return (
        <View style={styles.container} >
            <IconoMenu/>
            <NombreApp/>
            <IconoUser/>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        marginTop:20,
        marginBottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
  })