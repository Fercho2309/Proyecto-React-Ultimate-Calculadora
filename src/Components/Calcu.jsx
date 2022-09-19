import React, { useState } from 'react'
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
//import inputBaseClasses from '@mui/base/InputUnstyled/inputUnstyledClasses';

export default function Calcu() {

 const [num, setNum] = useState(0);
 const [oldnum, setOldNum] = useState(0);
 const [operador, setOperador] = useState();

 function inputNum(e) {
  let input=e.target.value;
  
  if(num===0){
    setNum(input);
  } else {
    setNum(num + input)
  }
 }

 function clear() {
  setNum(0)
 }

 function porcentaje() {
  setNum(num / 100)
 }

 function cambioSigno(){
  if(num>0){
    setNum(-num)
  }else {
    setNum(Math.abs(num))
  }
 }

 function controlOperador(e){
  var operadorInput = e.target.value
  setOperador(operadorInput)
  setOldNum(num)
  setNum(0)
 }

 function calcular() {
  if (operador==="/") {
    setNum(parseFloat(oldnum) / parseFloat(num))
  } else if (operador==="X") {
    setNum(parseFloat(oldnum) * parseFloat(num))
  } else if (operador==="-") {
    setNum(parseFloat(oldnum) - parseFloat(num))
  } else if (operador==="+") {
    setNum(parseFloat(oldnum)+ parseFloat(num))
  } else 
  
  console.log("calculo!!")

 }


 
  return (
    <>
    <div>
    
    <Box m={5}/>

    <Container maxWidth="xs">
    
    <div className="text">Calculadora</div>
    
    <div className="wrapper">
    <Box m={12}/>
        <h1 className='result'>{num}</h1>
        
        <button className ='borrar' onClick = {clear}>AC</button>
        <button className ='operador' onClick = {cambioSigno}>+/-</button>
        <button className ='operador' onClick = {porcentaje}>%</button> 
        <button className ='operador' onClick = {controlOperador} value = {"/"}>/</button>

        <button className ='numero' onClick = {inputNum} value = { 7 }>7</button>
        <button className ='numero' onClick = {inputNum} value = { 8 }>8</button>
        <button className ='numero' onClick = {inputNum} value = { 9 }>9</button> 
        <button className ='operador' onClick = {controlOperador} value = {"X"}>X</button>

        <button className ='numero' onClick = {inputNum} value = { 4 }>4</button> 
        <button className ='numero' onClick = {inputNum} value = { 5 }>5</button>
        <button className ='numero' onClick = {inputNum} value = { 6 }>6</button> 
        <button className ='operador' onClick = {controlOperador} value = {"-"}>-</button>

        <button className ='numero' onClick = {inputNum} value = { 1 }>1</button> 
        <button className ='numero' onClick = {inputNum} value = { 2 }>2</button>
        <button className ='numero' onClick = {inputNum} value = { 3 }>3</button> 
        <button className ='operador' onClick = {controlOperador} value = {"+"}>+</button>

        <button className ='numero' onClick = {inputNum} value = { 0 }>0</button>
        <button className ='punto' onClick = {inputNum} value = {"."}>,</button>

        <button className ='resultado' onClick = {calcular}>=</button>

    </div>
    </Container>
    </div>
    </>
  )
}
