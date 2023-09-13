import React from "react";
import App from "../App.css";
import About from "./About";
import UseState from "../hooks/UseState";
import Home from "./Home";
import UseEfect from "../hooks/UseEffect";
const Menu=props =>(
<aside className="Menu">
    <nav>
       
    <ul>
        <li>
            <a href="/Home">inicio</a>
            </li>
            <li>
            <a href="/About">sobre</a>
            </li>
            <li>
            <li>
            <a href="/UseState">use</a>
            </li>
            <li>
            <a href="/UseEfect">use2</a>
            </li>
            </li>
        </ul>
    </nav>
</aside>

)
export default Menu
