import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { SolidIcon } from "../../util/FontAweSomeIcon";
import style from "./RightSideBar.module.css";
import { io } from "socket.io-client";
import ButtonAppBar from "../MUI/Header";
// const socket = io("localhost:5000");
const socket = io("192.168.1.8:5000");

function RightSideBar() {
  const [textRoom, SetTextRoom] = useState("");
  const [roomID, SetRoomID] = useState(-1);
  const [textDisplay, SetTextDisplay] = useState([]);
  const [text, setText] = useState("");
  const SendMessage = function () {
    SetTextDisplay((prev) => {
      return (prev = [...prev, text]);
    });
    console.log("Hi");
    socket.emit("send-message", text, textRoom);
  };
  const SendJoinRoom = function () {
    socket.emit("join-room", textRoom);
  };
  useEffect(() => {
    socket.on("received-message", (message) => {
      SetTextDisplay((prev) => [...prev, message]);
    });
  }, [...textDisplay]);
  return (
    <>
      <Grid item lg={9} md={9} sm={10}>
        <div className={`hidden-xs ${style.MainContainer}`}>
          
          <div className={`${style.ShowMessage}`}>
            {textDisplay.map((item, idx) => {
              return <p>{item}</p>;
            })}
          </div>
          <input
            value={textRoom}
            onKeyUp={(e) => {
              if (e.code == "Enter") {
                SendMessage();
                SetRoomID(textRoom);
              }
            }}
            onChange={(e) => {
              SetTextRoom(e.target.value);
            }}
          />
          <button
            onClick={() => {
              SendJoinRoom();
            }}
          >
            Join Room
          </button>
          <div className={`${style.MessageInput}`}>
            <div className={`${style.IconInput}`}>
              <FontAwesomeIcon icon={SolidIcon.faLink} />
            </div>

            <input
              value={text}
              onKeyUp={(e) => {
                if (e.code == "Enter") {
                  SendMessage();
                  setText("");
                }
              }}
              onChange={(e) => {
                setText(e.target.value);
              }}
              placeholder="Type Message Here"
              className={`${style.InputText}`}
            />
            <div className={`${style.IconInput}`}>
              <FontAwesomeIcon icon={SolidIcon.faIcons} />
            </div>

            <div className={`${style.IconInput}`}>
              <FontAwesomeIcon icon={SolidIcon.faMicrophone} />
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
}

export default RightSideBar;
