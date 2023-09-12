import './App.css'
import React from 'react'
import { BrowserRouter } from  'react-router-dom' // essa importação mudou
import Menu from './navegação/Menu' 
import  Contente from './navegação/Contente' 
import Calculadora from './calc/Calculadora'
const App = props => (
    <div className="App">
        <BrowserRouter> 
            <Menu />
            <Contente />
            <Calculadora></Calculadora>
        </BrowserRouter>
    </div>
)
 export default App