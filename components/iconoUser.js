import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';


export default function IconoUser(){

    const navigation = useNavigation(); 

    return (
        <View>
            <Icon 
                name='person' 
                size={30} 
                color='#000' 
                style= {styles.icono}
                onPress={() => navigation.openDrawer()}
            />
        </View>
    );
  }

  const styles = StyleSheet.create({
    icono:{
        paddingRight : 20, 
    }
  })