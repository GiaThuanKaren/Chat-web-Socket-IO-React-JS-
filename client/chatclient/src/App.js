import logo from "./logo.svg";
import "./App.css";
import "./GlobalStyle.css";
import { useState } from "react";
import { io } from "socket.io-client";
const socket = io("localhost:5000");
import { Grid } from "@mui/material";
import LeftSideBar from "./Components/LeftSidebar/LeftSideBar";
import RightSideBar from "./Components/RightSideBar/RightSideBar";
import ButtonAppBar from "./Components/MUI/Header";
import ChatSection from "./Page/ChatSection/ChatSection";
import LoginAndRegister from "./Page/LoginAndRegister/LoginAndRegister";
import { Routes } from "react-router";
function App() {
  const [text, setText] = useState("");
  // const SendMessage = function () {
  //   console.log("Hi");
  //   socket.emit("send-message",{
  //     message:text
  //   });
  // };
  // 
  return (
    <>
      {/* <h1>hhh</h1> */}
      {/* <ButtonAppBar /> */}
      <div style={{overflow:"hidden",minHeight:"100vh"}}>
      <Routes>
        
      </Routes>
        {/* <ChatSection /> */}
        <LoginAndRegister />
      </div>
    </>
  );
}

export default App;
