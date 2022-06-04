import logo from "./logo.svg";
import "./App.css";
import {useState} from 'react'
import { io } from "socket.io-client";
const socket = io("localhost:5000");

function App() {
  const [text, setText]=useState('')
  const SendMessage = function () {
    console.log("Hi");
    socket.emit("send-message",{
      message:text
    });
  };
  return (
    <div className="App">
      <input value={text} onChange={(e)=>{
        setText(e.target.value)
      }} placeholder="Message...." />

      <button onClick={SendMessage}>Send Message</button>
    </div>
  );
}

export default App;
