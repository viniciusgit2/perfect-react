import './App.css'
import React from 'react'
 
import { BrowserRouter } from  'react-router-dom' // essa importação mudou
import Menu from './navegação/Menu' 
import  Contente from './navegação/Contente' 


const App = props => (
    <div className="App">
        <BrowserRouter> 
            <Menu />
            <Contente />
        </BrowserRouter>
    </div>
)
 export default App