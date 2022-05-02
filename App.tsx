
import React from 'react';
import {SafeAreaView} from 'react-native';
import { CalculadoraScreen } from './Src/Screens/CalculadoraScreen';
import { Styles } from './Src/Theme/Styles';

const App = ()=>{
  return (
    <SafeAreaView style={Styles.fondo}>
      <CalculadoraScreen />
    </SafeAreaView>
  );
};


export default App;
