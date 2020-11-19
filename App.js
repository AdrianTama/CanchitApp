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
import { useState } from 'react';
import GlobalContext from './components/context'

//Ingreso y egreso - Cliente/Admin
import SignIn from './pages/signin';
import Salir from './components/salir';
//Home Cliente/Admin
import PagPrincCliente from './pages/homeCliente';
import PagPrincAdmin from './pages/homeAdmin';
//Cliente - Usuario
import AgregarUsuario from './pages/AgregarUsuario';
import Perfil from './pages/perfil';
import CambiarClave from './pages/cambiarClave';
//Cliente - Reserva 
import NuevaReserva from './pages/nuevareserva';
import PagoReserva from './pages/pagoReserva';
import MiReserva from './pages/mireserva';
//Admin - Reservas
import ListadoReservas from './pages/ListadoReservas/scrollViewReservas';
import VerReserva from './pages/verReserva';
//Admin - Canchas
import ListadoCanchas from './pages/ListadoCanchas/misCanchas';
import AgregarCancha from "./pages/ListadoCanchas/agregarCancha";
import EditarCancha from './pages/ListadoCanchas/editarCancha';

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
      <Stack.Screen name="Cambiar Contraseña" component={CambiarClave} />
    </Stack.Navigator>
  )
}

function AdminReservas() {
  return (
    <Stack.Navigator initialRouteName="Listado Reservas">
      <Stack.Screen name="Listado Reservas" component={ListadoReservas} options={{ headerShown: false }} />
      <Stack.Screen name="Modificar Reserva" component={VerReserva} />
    </Stack.Navigator>
  )
}

function AdminCanchas() {
  return (
    <Stack.Navigator initialRouteName="Listado Canchas">
      <Stack.Screen name="Listado Canchas" component={ListadoCanchas} options={{ headerShown: false }} />
      <Stack.Screen name="Agregar Cancha" component={AgregarCancha} options={{ headerShown: false }} />
      <Stack.Screen name="Editar Cancha" component={EditarCancha} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

function HomeAdmin() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={PagPrincAdmin} />
      <Drawer.Screen name="Listado Canchas" component={AdminCanchas} />
      <Drawer.Screen name="Listado Reservas" component={AdminReservas} />
      <Drawer.Screen name="Salir" component={Salir} />
    </Drawer.Navigator>
  );
}

function HomeCliente() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={PagPrincCliente} />
      <Drawer.Screen name="Nueva Reserva" component={Reserva} />
      <Drawer.Screen name="Mi Reserva" component={MiReserva} />
      <Drawer.Screen name="Mi perfil" component={MiPerfil} />
      <Drawer.Screen name="Salir" component={Salir} />
    </Drawer.Navigator>
  );
}



export default function App() {

  const [authData, setAuthData] = useState({
    usuario: '',
    token: '',
    cambioDatos: (usuario, token) => {
      setAuthData({ ...authData, usuario: usuario, token: token })
    }
  })


  return (
    <GlobalContext.Provider value={authData}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Sign In">
          <Stack.Screen name="Sign In" component={SignIn} />
          <Stack.Screen name="Registrarme" component={AgregarUsuario} />
          {authData.usuario.admin === false ?
            <Stack.Screen name="Home" component={HomeCliente} options={{ headerShown: false }} />
            :
            <Stack.Screen name="Home" component={HomeAdmin} options={{ headerShown: false }} />
          }
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContext.Provider>
  );
}
