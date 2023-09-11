import React from "react";
import { Routes, Route } from "react-router-dom"; 
 import  Home from '../../src/Home'
 import  About from '../navegação/About'
 import  Menu from '../navegação/Menu'
import Usestate from "../hooks/Usestate";
 
const Contente = props => (
  <main className="Contente">
    <Routes>
    <Route path="/About"  element={<About />}></Route>
    <Route path="/" exact element={<Home />} />

    </Routes>
    {/* --------------------------------------------------- */}
  </main>
);
 
export default Contente;