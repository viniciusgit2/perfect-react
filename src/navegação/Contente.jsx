import React from "react";
import { Routes, Route } from "react-router-dom"; 
 import  About from '../navegação/About'
 import  Menu from '../navegação/Menu'
 import Home from "./Home";
import UseState from "../hooks/Usestate";
const Contente = props => (
  <main className="Contente">
    <Routes>
    <Route path="/About"  element={<About />}></Route>
    <Route path="/" exact element={<Home />} />
    <Route path="../hooks/UseState" exact element={<UseState/>} /> 
    </Routes>
    {/* --------------------------------------------------- */}
  </main>
);
 
export default Contente;