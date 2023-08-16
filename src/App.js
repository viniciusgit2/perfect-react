import logo from './logo.svg';
import './App.css';
import React from 'react';
import Aleatotio from './componentes/Aleatorio';
import Card from './componentes/Card'
import Contador from './componentes/Contadador'

import Calculadora from './calc/Calculadora'
import Menu from './navegação/Menu';
function App() {
  return (
   
    <div className="App">
<Menu></Menu>
      <Contador/>
      <Calculadora/>
       <Aleatotio></Aleatotio>
       <Card></Card>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
