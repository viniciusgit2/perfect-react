import react, { useState } from 'react'
import App from "../App.css";

const UseState=props =>{
    const [count,SetCount]=useState(0)
    return(
    <div className="UseState">
    <h1>UseState</h1>
    <p>
    <div className="center">
    <span className="center">{count}</span>
    <button className="btn"onClick={()=>SetCount(count - 1)}>-</button>
    <button className="btn"onClick={()=>SetCount(count + 1)}>+</button>

    </div>
    </p>
    </div>
    )
}
    export default UseState