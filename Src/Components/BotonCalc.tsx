/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { Styles } from '../Theme/Styles';


interface PropiedadesBoton{
    texto: String;
    color: String;
    color_t: string;
    ancho?: boolean;
    accion: (numeroTexto: String) => void;

}
export const BotonCalc = ({texto, color, color_t, ancho = false, accion} : PropiedadesBoton ) => {
  return (

    <TouchableOpacity
        onPress={() => accion( texto )}
    >

        <View style={{
            ...Styles.boton,
            backgroundColor:color,
            width: (ancho) ? 180 : 80,
        }}>
            <Text style={{
                ...Styles.textoBoton,
                color:color_t,
            }}>{texto}</Text>
        </View>
    </TouchableOpacity>

  );
};
