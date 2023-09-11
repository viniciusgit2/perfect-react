import './App.css'
import React from 'react'
 
import { BrowserRouter } from  'react-router-dom' // essa importação mudou
import Menu from './navegação/Menu' 
import  Contente from './navegação/Contente' 
import Calculadora from './calc/Calculadora'
import Usestate from './hooks/Usestate'
const App = props => (
    <div className="App">
        <BrowserRouter> 
            <Menu />
            <Contente />
            <Calculadora></Calculadora>
           
        </BrowserRouter>
        <Usestate></Usestate>
    </div>
)
 export default App