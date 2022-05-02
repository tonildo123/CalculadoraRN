/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import {View, Text} from 'react-native';
import { BotonCalc } from '../Components/BotonCalc';
import { Styles } from '../Theme/Styles';
import { useCalculadora } from '../Hooks/useCalculadora';


export const CalculadoraScreen = ( ) => {

  //desestructuro lo que viene de useCalculadora
  const {numero,
         numeroAnterior,
         limpiar,
         NegativoPositivo,
         btnDelete,
         btnDividir,
         armarNumero,
         btnMultiplicar,
         btnRestar,
         btnSumar,
         btnResultado } = useCalculadora();


  return (
    <View style={Styles.calculadoraContainer} >
        {
         (numeroAnterior !== '0') && (
          <Text style={Styles.resultadoPequeño} >{numeroAnterior}</Text>
         )
        }

        <Text style={Styles.resultado}
              numberOfLines={1}
              adjustsFontSizeToFit >{numero}</Text>

        <View style={Styles.fila}>
            {/*boton*/}
            <BotonCalc texto="C" color="#9B9B9B" color_t="black" accion={limpiar}/>
            <BotonCalc texto="+/-" color="#9B9B9B" color_t="black" accion={NegativoPositivo}/>
            <BotonCalc texto="del" color="#9B9B9B" color_t="black" accion={btnDelete}/>
            <BotonCalc texto="/" color="#FF9427" color_t="white" accion={btnDividir}/>
        </View>
        <View style={Styles.fila}>
            {/*boton*/}
            <BotonCalc texto="7" color="#2D2D2D" color_t="white" accion={armarNumero}/>
            <BotonCalc texto="8" color="#2D2D2D" color_t="white" accion={armarNumero}/>
            <BotonCalc texto="9" color="#2D2D2D" color_t="white" accion={armarNumero}/>
            <BotonCalc texto="X" color="#FF9427" color_t="white" accion={btnMultiplicar}/>
        </View>
        <View style={Styles.fila}>
            {/*boton*/}
            <BotonCalc texto="4" color="#2D2D2D" color_t="white" accion={armarNumero}/>
            <BotonCalc texto="5" color="#2D2D2D" color_t="white" accion={armarNumero}/>
            <BotonCalc texto="6" color="#2D2D2D" color_t="white" accion={armarNumero}/>
            <BotonCalc texto="-" color="#FF9427" color_t="white" accion={btnRestar}/>
        </View>
        <View style={Styles.fila}>
            {/*boton*/}
            <BotonCalc texto="1" color="#2D2D2D" color_t="white" accion={armarNumero}/>
            <BotonCalc texto="2" color="#2D2D2D" color_t="white" accion={armarNumero}/>
            <BotonCalc texto="3" color="#2D2D2D" color_t="white" accion={armarNumero}/>
            <BotonCalc texto="+" color="#FF9427" color_t="white" accion={btnSumar}/>
        </View>
        <View style={Styles.fila}>
            {/*boton*/}
            <BotonCalc texto="0" color="#2D2D2D" color_t="white" accion={armarNumero} ancho/>
            <BotonCalc texto="." color="#2D2D2D" color_t="white" accion={armarNumero}/>
            <BotonCalc texto="=" color="#FF9427" color_t="white" accion={btnResultado}/>
        </View>


    </View>
  );
};

