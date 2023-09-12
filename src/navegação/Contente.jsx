import React from "react";
import { Routes, Route } from "react-router-dom"; 
 import  About from '../navegação/About'
 import  Menu from '../navegação/Menu'
 import Home from "./Home";
 import Usestate from "../hooks/Usestate";
const Contente = props => (
  <main className="Contente">
    <Routes>
    <Route path="/About"  element={<About />}></Route>
    <Route path="/" exact element={<Home />} />
    <Route path="./UseState" exact element={<Usestate />} />
    </Routes>
    {/* --------------------------------------------------- */}
  </main>
);
 
export default Contente;