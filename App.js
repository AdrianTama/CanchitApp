import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";


import Signin from './pages/signin';
import Nuevareserva from './pages/nuevareserva';
import PaginaPrincipal from './pages/home';
import Mireserva from './pages/mireserva';
import Agregarcancha from "./pages/agregarCancha";
import Agregartipocancha from './pages/agregarTipoCancha';
import Agregarusuario from './pages/AgregarUsuario';

//import { useState } from 'react';


const Stack = createStackNavigator();


function SignIn() {
  return (
    <Signin/>
  );
}

function NuevaReserva() {
  return (
    <Nuevareserva/>
  );
}

function Home() {
  return (
    <PaginaPrincipal/>
  );
}


function MiReserva() {
  return (
    <Mireserva/>
  );
}

function AgregarCancha() {
  return (
    <Agregarcancha/>
  );
}

function AgregarTipoCancha() {
  return (
    <Agregartipocancha/>
  );
}

function AgregarUsuario() {
  return (
    <Agregarusuario/>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Sign In" component={ SignIn } />
      <Drawer.Screen name="Home" component={ Home } />
      <Drawer.Screen name="Nueva Reserva" component={ NuevaReserva } />
      <Drawer.Screen name="Mi Reserva" component={ MiReserva } />
      <Drawer.Screen name="Agregar Cancha" component={ AgregarCancha } />
      <Drawer.Screen name="Agregar tipo de cancha" component={ AgregarTipoCancha } />
      <Drawer.Screen name="Registrar usuario" component={ AgregarUsuario } />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
