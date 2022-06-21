import { useState } from "react"
import style from "./ListUserLeftSideBar.module.css"

export default function ListUserLeftSideBar() {
    const [state , setState]=useState(1);
    return (
        <div>
            <h1>List user Message {state}</h1>
            <button
            onClick={()=>{
                setState(state+1)
            }}
        
            >Click me</button>
        </div>
    )
}
