import logo from './logo.svg';
import './App.css';
import Aleatotio from './componentes/Aleatorio';
import Card from './componentes/Card'
import Contador from './componentes/Contadador'
import Segundo from './componentes/Segundo'
import Primeiro from'./componentes/Primeiro'
import Parouimpar from'./componentes/Parouimpar'
import Membro from './componentes/Membro'
import Listaaluno from './componentes/Listaaluno'
import Frag from './componentes/Frag'
import Calculadora from './calc/Calculadora'

function App() {
  return (
   
    <div className="App">
      <Contador/>
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
