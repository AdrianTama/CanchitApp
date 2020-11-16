import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


import SignIn from './pages/signin';
import NuevaReserva from './pages/nuevareserva';
import PaginaPrincipal from './pages/home';
import MiReserva from './pages/mireserva';
import AgregarCancha from "./pages/agregarCancha";
import AgregarUsuario from './pages/AgregarUsuario';
import Perfil from './pages/perfil';
import CambiarClave from './pages/cambiarClave';
import PagoReserva from './pages/pagoReserva';
import ListadoCanchas from './pages/ListadoCanchas/scrollViewCanchas';
import ListadoTurnos from './pages/ListadoTurnos/scrollViewTurnos';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}


function Reserva() {
  return (

    <Stack.Navigator initialRouteName="Nueva Reserva">
      <Stack.Screen name="Nueva Reserva" component={NuevaReserva} options={{ headerShown: false }} />
      <Stack.Screen name="Pago Reserva" component={PagoReserva} options={{ headerShown: false }} />
      <Stack.Screen name="Mi Reserva" component={MiReserva} options={{ headerShown: false }} />
    </Stack.Navigator>

  )
}

function MiPerfil() {
  return (

    <Stack.Navigator initialRouteName="Mi Perfil">
      <Stack.Screen name="Mi Perfil" component={Perfil} options={{ headerShown: false }} />
      <Stack.Screen name="Cambiar Contraseña" component={CambiarClave}  />
    </Stack.Navigator>

  )
}

function Home() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={PaginaPrincipal} />
      <Drawer.Screen name="Nueva Reserva" component={Reserva} />
      <Drawer.Screen name="Mi Reserva" component={MiReserva} />
      <Drawer.Screen name="Pago Reserva" component={PagoReserva} />
      <Drawer.Screen name="Agregar Cancha" component={AgregarCancha} />
      <Drawer.Screen name="Listado Canchas" component={ListadoCanchas} />
      <Drawer.Screen name="Listado Turnos" component={ListadoTurnos} />
      <Drawer.Screen name="Mi perfil" component={MiPerfil} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Sign In">
        <Stack.Screen name="Sign In" component={SignIn} />
        <Stack.Screen name="Registrarme" component={AgregarUsuario} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
