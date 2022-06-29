import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useEffect, useMemo, useRef, useState } from "react";
import { SolidIcon } from "../../util/FontAweSomeIcon";
import style from "./RightSideBar.module.css";
import { io } from "socket.io-client";
import ButtonAppBar from "../MUI/Header";
import ScrollToBottom from "react-scroll-to-bottom";
import { useSelector } from "react-redux";
import { socket } from "../../util/SocketConfig/socket";
function RightSideBar() {
  const GlobalState= useSelector(state=> state);
  console.log(GlobalState)
  const [textRoom, SetTextRoom] = useState(GlobalState.idUSer == "" ? "" : GlobalState.idUSer);
  const [roomID, SetRoomID] = useState(-1);
  const [textDisplay, SetTextDisplay] = useState([
    {
      message: "",
      from: "",
    },
  ]);
  const [msg, Setmsg] = useState([]);
  const [text, setText] = useState("");
  const Ele = useRef();

  const SendMessage = async function () {
    console.log(Ele.current, Ele.current.scrollHeight, "Before");
    // Ele.current.scrollIntoView(false);
    SetTextDisplay((prev) => {
      return (prev = [...prev, { message: text, from: "send" }]);
    });
    console.log("Hi",GlobalState.idUSer);
    Setmsg((prev) => [...prev, text]);
    await socket.emit("send-message", text, GlobalState.idUSer == "" ? "" : GlobalState.idUSer);
    Ele.current.scrollTop = Ele.current.scrollHeight;
    // console.log("Sended", 36);
    console.log(Ele.current, Ele.current.scrollHeight, "after");
  };
  const SendJoinRoom = function () {
    socket.emit("join-room", textRoom);
  };
  useEffect(() => {
    socket.on("received-message", (message) => {
      // Ele.current.scrollIntoView(false);
      //
      console.log(Ele.current.scrollTop, "34");
      if (message != "") {
        SetTextDisplay((prev) => [...prev, { message, from: "recived" }]);
        Setmsg((prev) => [...prev, message.message]);
        Ele.current.scrollTop = Ele.current.scrollHeight;
        console.log(Ele.current, Ele.current.scrollTop, "after");
      }
    });
  }, [socket]);

  return (
    <>
      <Grid item lg={9} md={9} sm={10} xs={12}>
        <div className={`${style.MainContainer}`}>
          <div ref={Ele} className={`${style.ShowMessage}`}>
            {textDisplay.map((item, idx) => {
              return item.message ? (
                <div
                  key={`${item.message}${Math.random()}`}
                  className={`${style.BoxMsg}`}
                >
                  
                  <div
                    className={
                      (item.from == "send"
                        ? `${style.SendMsg}`
                        : `${style.ReceivedMsg}`) + ` ${style.MsgDisplay}`
                    }
                  >
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1vgdYWHDUkyYYYxV4RV78Q4AHDtagK2GRQ&usqp=CAU" />
                    <p className={`${style.MsgText}`}>{item.message}</p>
                    {/* <p>12</p> */}
                  </div>
                  {/* <p>12:45 am</p> */}
                </div>
              ) : null;
            })}
          </div>

          {/* <input
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
          </button> */}
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
