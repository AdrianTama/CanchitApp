import React, { useEffect, useContext } from 'react';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import GlobalContext from './context';
import { render } from 'react-dom';
import { Text } from 'react-native';


export default Salir = () => {
    const context = useContext(GlobalContext);

    const navigation = useNavigation();

    useEffect(() => {
        navigation.navigate('Sign In');
        context.cambioDatos('', '');
        console.log(context);
    }, [])

    return null;

}
