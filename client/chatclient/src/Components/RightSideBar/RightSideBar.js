import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";
import { useState } from "react";
import { SolidIcon } from "../../util/FontAweSomeIcon";
import style from "./RightSideBar.module.css";
import { io } from "socket.io-client";
// const socket = io("localhost:5000");
const socket = io("192.168.1.8:5000")

function RightSideBar() {
  const [text, setText] = useState("");
  const SendMessage = function () {
    console.log("Hi");
    socket.emit("send-message", {
      message: text,
    });
  };

  return (
    <>
      <Grid item lg={9} md={9} sm={10}>
        <div className={`hidden-xs ${style.MainContainer}`}>
          <div className={`${style.ShowMessage}`}></div>

          <div className={`${style.MessageInput}`}>
            <div className={`${style.IconInput}`}>
              <FontAwesomeIcon icon={SolidIcon.faLink} />
            </div>
            <input
            value={text}
            onKeyUp={(e)=>{
               if(e.code=="Enter"){
                   SendMessage()
                   setText("")
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
