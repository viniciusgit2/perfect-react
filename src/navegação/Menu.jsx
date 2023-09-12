import React from "react";
import App from "../App.css";
import About from './About'
import Usestate from "../hooks/Usestate";
const Menu=props =>(
<aside className="Menu">
    <nav>
    <ul>
        <li>
            <a href="./">inicio</a>
            </li>
            <li>
            <a href="./about">sobre</a>
            </li>
            <li>
            <a href="../UseState">use</a>
            </li>
        </ul>
    </nav>
</aside>
)
export default Menu
