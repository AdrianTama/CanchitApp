import React from 'react';
import { StyleSheet, Text , TextInput, View, TouchableHighlight} from 'react-native';

export default function(){
    const [usuario, onChangeUser] = React.useState('');
    const [clave, onChangeClave] = React.useState(''); 

    function ingresar(){

    };

    return (
        <View  >
            <Text style={styles.titulo}>CanchitApp</Text>
            <Text style= {styles.texto}>Ingrese su usuario</Text>
            <TextInput
                style={styles.box}
                onChangeText={text => onChangeUser(text)}
                value={usuario}
            />
            <Text style= {styles.texto}>Ingrese su contraseña</Text>
            <TextInput
                secureTextEntry={true}
                style={styles.box}
                onChangeText={text => onChangeClave(text)}
                value={clave}
            />
           <TouchableHighlight style={styles.containerBoton} onPress={ingresar}>
                <View style={styles.boton}>
                    <Text style= {styles.textoBoton}>Ingresar</Text>
                </View>
            </TouchableHighlight>
           
        </View>
    );
  }

  const styles = StyleSheet.create({
    titulo:{
        textAlign: 'center',
        fontSize:40,
        marginBottom: 90,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },

    image:{
        flex:10,
        alignItems:'center',
        resizeMode: 'contain',
        justifyContent: 'center',
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

    texto:{
        
    },
    
    box: {
      height:40,
      width: 350,
      borderBottomWidth: 1,
      marginVertical: 30,
      alignContent: 'center'
    },
  
  })