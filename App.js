import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
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
import AgregarUsuario from './pages/agregarUsuario';
import Perfil from './pages/perfil';
import CambiarClave from './pages/cambiarClave';


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
      <Drawer.Screen name="Home" component={ PaginaPrincipal } />
      <Drawer.Screen name="Nueva Reserva" component={NuevaReserva } />
      <Drawer.Screen name="Mi Reserva" component={ MiReserva } />
      <Drawer.Screen name="Agregar Cancha" component={ AgregarCancha } />
      <Drawer.Screen name="Registrar Usuario" component={ AgregarUsuario } />
      <Drawer.Screen name="Mi perfil" component={ Perfil } />
      <Drawer.Screen name="Cambiar Clave" component={ CambiarClave } />
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
