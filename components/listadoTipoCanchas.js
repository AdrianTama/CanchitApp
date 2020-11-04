import React, { useState, useEffect } from 'react';
import { Picker, View, Text } from 'react-native';

import s from './styles';

//Adaptar con lógica de reservas

export default function ListadoTipoCanchas() {

    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState([]);

    useEffect(() => {
        //adaptar con ip de la compu que ejecute: http://ip:3000/api...
        fetch('http://192.168.0.117:3000/api/tipocancha/')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error));
    }, []);

    return (

        <View>
            <Picker
                selectedValue={selectedValue}
                style={s.picker}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Seleccionar tipo de cancha" value="0" />
                {data.map((item, key) => (
                    <Picker.Item label={item.descripcion} value={item.descripcion} key={key} />)
                )}
            </Picker> 
        </View>

    );
};
