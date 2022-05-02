import { useRef, useState } from "react"; // cuando aparece el cubito lo importa a la libreria o lo que sea

/**
 * En este custom hooks debo poner todo en un return para exponer los metodos y propiedades 
 * que estoy usando
 *
 *  ejemplo return {
 *  metodo1, metodo2,
 *  propiedad1, propiedad2, etc.
 *                 }
 *
 *  odo esto antes del cierre del export
 */

enum Operadores{
    sumar, restar, multiplicar, dividir
  }
export const useCalculadora = () => {

  const ultimaOperacion = useRef<Operadores>();


  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const limpiar = ()=>{
    setNumero('0');
    setNumeroAnterior('0');
  };

  // para el mas-menos
  const NegativoPositivo = () =>{

    if (numero.includes('-')){
      setNumero(numero.replace('-', ''));
    } else {  setNumero('-' + numero);}

  };

  const armarNumero = (numeroTexto : String) =>{

    // NO aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') {return;}

    // por si comineza con cero o menos cero
    if (numero.startsWith('0') || numero.startsWith('-0')){

      // punto decimal
      if (numeroTexto === '.'){
        setNumero(numero + numeroTexto); // concateno 0 ó -0 con punto decimal
        // evaluar si es otro cero, y hay un punto
      } else if (numeroTexto === '0' && numero.includes('.')){
        setNumero(numero + numeroTexto);
      // evaluar si es diferente de cero y no tiene punto
      } else if (numeroTexto !== '0' && !numero.includes('.')){
        setNumero( numeroTexto );
        // evaluar que no permita 0000.  000
      } else if (numeroTexto !== '0' && !numero.includes('.')){
        setNumero( numero );
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }

  };

  const btnDelete = () =>{

    let negativo = '';
    let numeroTemp = numero;
    if (numero.includes('-')){
      negativo = '-';
      numeroTemp = numero.substring(1);
    }

    if (numeroTemp.length > 1){

      setNumero( negativo + numeroTemp.substring(0 ,numero.length - 1));

    } else {
      setNumero('0');
    }

  };

  const cambiarNumeroAnterior = () =>{


    if (numero.endsWith('.')){
        setNumeroAnterior(numero.substring(0 ,numero.length - 1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');

  };

  const btnDividir = ()=>{
    cambiarNumeroAnterior();
    ultimaOperacion.current = Operadores.dividir;

  };
  const btnMultiplicar = ()=>{
    cambiarNumeroAnterior();
    ultimaOperacion.current = Operadores.multiplicar;

  };
  const btnSumar = ()=>{
    cambiarNumeroAnterior();
    ultimaOperacion.current = Operadores.sumar;

  };
  const btnRestar = ()=>{
    cambiarNumeroAnterior();
    ultimaOperacion.current = Operadores.restar;

  };
  const btnResultado = ()=> {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);
    switch (ultimaOperacion.current) {
      case Operadores.sumar :
        setNumero(`${num1 + num2}`);
        break;
      case Operadores.restar :
        setNumero(`${num2 - num1}`);
         break;
      case Operadores.multiplicar :
        setNumero(`${num1 * num2}`);
        break;
      case Operadores.dividir :
        setNumero(`${num2 / num1}`);
        break;
    }

    setNumeroAnterior('0');
  };

// expongo todo lo que expondre de esta clase/custom hooks
  return {
    numero,
    numeroAnterior,
    limpiar,
    NegativoPositivo,
    btnDelete,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    btnResultado,
  }

};
