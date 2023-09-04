import React from "react";
import { Routes, Route } from "react-router-dom"; // Importe esses arquivos
 import  Home from '../../src/Home'
 import  About from '../navegação/About'
 import  Menu from '../navegação/Menu'

 
const Contente = props => (
  <main className="Contente">
    {/* Toda essa parte está diferente da do professor, analisem as diferenças */}
    <Routes>
    <Route path="/About"  element={<About />}></Route>
    <Route path="/" exact element={<Home />} />

    </Routes>
    {/* --------------------------------------------------- */}
  </main>
);
 
export default Contente;