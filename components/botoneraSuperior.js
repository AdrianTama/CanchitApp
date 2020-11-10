import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import s from './styles';
import IconoMenu from './iconoMenu';
import IconoUser from './iconoUser';
import NombreApp from './nombreApp';

export default function BotoneraSuperior() {

    const navigation = useNavigation();

    return (
        <View style={s.botoneraSuperior} >
            <IconoMenu />
            <NombreApp />
            <IconoUser />
        </View>
    );
}


