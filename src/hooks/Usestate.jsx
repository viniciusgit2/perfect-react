import react, { useState } from 'react'
import App from "../App.css";

const UseState=props =>{
    const [count,SetCount]=useState(0)
    const [name,SetName]=useState("inicial")
    return(
    <div className="UseState">
    <h1>UseState</h1>
    <p>
    <div className="center">
    <span className="center">{count}</span>
    <button className="btn"onClick={()=>SetCount(count - 1)}>-</button>
    <button className="btn"onClick={()=>SetCount(count + 1)}>+</button>
    <button className="btn"onClick={()=>SetCount(count * 2)}>/</button>
    <button className="btn"onClick={()=>SetCount(count / 2)}>*</button>
    <button className="btn"onClick={()=>SetCount(current => current +1000)}>+1000</button>
    <input type="text" className="input"value={name} onChange={e=>SetName(e.target.value)} />
    </div>
    </p>
    </div>
    )
}
    export default UseState