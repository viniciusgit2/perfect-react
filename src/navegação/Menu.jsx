import React from "react";
import App from "../App.css";
import About from './About'
import UseState from "../hooks/UseState";
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
            <a href="../hooks/UseState">use</a>
            </li>
        </ul>
    </nav>
</aside>
)
export default Menu
