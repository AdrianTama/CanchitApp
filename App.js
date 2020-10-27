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

import AgregarCancha from "./components/AgregarCancha";
import { useState } from 'react';


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


//canchas

export default function App() {

  const [canchas, setCanchas] = useState(canchas)

const [mostrarCanchas, setFlag] = useState(true);

const guardarCancha = ({descripcion, numero}) => {
  console.log(descripcion, numero)
  setCanchas([...contacts, {
    descripcion, numero, key: canchas.length
  }])

  setFlag(false)

}


return (


  <View style={styles.container}>

    {
      (mostrarCanchas) ?
        
        <AgregarCancha guardarCancha={guardarCancha} />

        :
        <View>
          <View>
            <Text styles>Listado de canchas</Text>
          </View>

          {/* <ScrollViewContact canchas={canchas} /> */}

          <FlatListContact contactos={contacts} />

          {/* <SectionListCancha canchas={canchas} /> */}
        </View>

    }
  </View>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight
    // alignItems: 'center',
    // justifyContent: 'center',
   },
  row: {
    padding: 15
  }
});