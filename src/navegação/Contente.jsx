import React from "react";
import { Routes, Route } from "react-router-dom"; 
 import  About from './About'
 import  Menu from './Menu'
 import Home from "./Home";
import UseState from "../hooks/UseState";
import '../App.css'
const Contente = props => (
  <main className="Contente">
    <Routes>
    <Route path="/About"  element={<About />}></Route>
    <Route path="/UseState" element={<UseState/>} /> 

    <Route path="/Home"  element={<Home />} />
    </Routes>
    {/* --------------------------------------------------- */}
  </main>
);
 
export default Contente;