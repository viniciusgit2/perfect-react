import App from "../App.css";
import React, { useEffect, useState } from "react";
function calcfatorial(n){
    if(n<0) return 'nãoexiste'
    if(n===0)return 1
    if(n>1000000000000000000)return 'é um exagero'
    return calcfatorial(n -1)* n
}
const UseEfect=props =>{
    const [numero,Setnumero]=useState(1)
    const [fatorial,Setfatorial]=useState(1)
useEffect (function(){Setfatorial(calcfatorial(numero))})

    return(

    <div className="UseEfect">

    <h1>UseEfect</h1>
    <p>
    
    <div className="center">
        <span className="center">fatotial:</span>
        <span className="text red">{fatorial}</span>
    <input type="number" className="input" value={numero}onChange={e=>Setnumero(e.target.value)}></input>
    </div>
    </p>
    </div>
    )
}

    export default UseEfect