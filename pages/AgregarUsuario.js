import React, { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableHighlight, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

import BotoneraSuperior from "../components/nombreApp";
import s from "../components/styles";

//Falta mejorar mensajes de error en cada input
//Ver si cuando se registra se tiene que loguear automáticamente

export default function AgregarUsuario() {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");

  const [puedeEnviar, setPuedeEnviar] = useState(false);
  const navigation = useNavigation();
  const ip = "https://secret-shore-39623.herokuapp.com/";

  // Validacion de boton enviar
  useEffect(() => {
    setPuedeEnviar(
      email.length > 3 &&
        nombre.length > 1 &&
        apellido.length > 1 &&
        telefono != 0 &&
        telefono > 7 &&
        contraseña.length >= 4 &&
        confirmarContraseña === contraseña
    );
  }, [email, nombre, apellido, telefono, contraseña, confirmarContraseña]);

  async function guardarUsuario() {
    let response = "";
    if (puedeEnviar) {
      //Conformación de componentes para el fetch
      const headers = new Headers();

      headers.append("Content-type", "application/json");

      const requestOptions = {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          email: email,
          password: contraseña,
          nombre: nombre,
          apellido: apellido,
          telefono: telefono,
          admin: false,
          montoADevolver: 0,
        }),
      };

      if (validarEmail(email)) {
        //Almacenamos el response del fetch
        response = await fetch(
          ip + "api/usuarios/agregarUsuario",
          requestOptions
        )
          .then((res) => res.json())
          .catch((err) => {
            console.log("Error: ", err);
          });
      }
      //Dependiendo el response, mostramos un msj
      if (response.email === undefined) {
        Alert.alert(
          "Error",
          "El mail ya se encuentra registrado o es invalido."
        );
      } else {
        Alert.alert("Usted se registró con éxito.");
        navigation.navigate("Home");
      }
    } else {
      //Mensaje de error cuando falta algún campo o hay algún campo inválido
      Alert.alert("Error", "¡Revisar los campos completados!", [
        {
          text: "Cancelar",
          onPress: console.log("Yes Pressed"),
        },
      ]);
    }

    function validarEmail(email) {
      const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      let esValido = expReg.test(email);
      return esValido;
    }
  }

  return (
    <ScrollView style={s.contenedorRegistro}>
      <BotoneraSuperior />
      <View style={s.containerIngreso}>
        <TextInput
          style={s.input}
          value={email}
          placeholder="Email"
          onChangeText={(texto) => setEmail(texto)}
          keyboardType="email-address"
        />
        <TextInput
          style={s.input}
          value={nombre}
          placeholder="Nombre"
          onChangeText={(texto) => setNombre(texto)}
        />
        <TextInput
          style={s.input}
          value={apellido}
          placeholder="Apellido"
          onChangeText={(texto) => setApellido(texto)}
        />
        <TextInput
          style={s.input}
          value={telefono}
          placeholder="Teléfono"
          onChangeText={(texto) => setTelefono(texto)}
          keyboardType="phone-pad"
        />
        <TextInput
          style={s.input}
          value={contraseña}
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={(texto) => setContraseña(texto)}
        />
        <TextInput
          style={s.input}
          value={confirmarContraseña}
          placeholder="Confirmar contraseña"
          secureTextEntry={true}
          onChangeText={(texto) => setConfirmarContraseña(texto)}
        />
      </View>

      <TouchableHighlight
        style={s.containerBoton}
        onPress={() => guardarUsuario()}
      >
        <View style={s.boton}>
          <Text style={s.textoBoton}>Confirmar</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        style={s.containerBoton}
        onPress={() => navigation.goBack()}
      >
        <View style={s.boton}>
          <Text style={s.textoBoton}>Cancelar</Text>
        </View>
      </TouchableHighlight>
    </ScrollView>
  );
}
