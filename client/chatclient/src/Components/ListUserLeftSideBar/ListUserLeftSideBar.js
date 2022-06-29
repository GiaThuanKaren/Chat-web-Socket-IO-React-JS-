import { Avatar, Grid } from "@mui/material";
import { useState } from "react";
import style from "./ListUserLeftSideBar.module.css";
import { useDispatch } from "react-redux";
import { SetIdUser } from "../../Redux/Actions/actions";
import { socket } from "../../util/SocketConfig/socket";
export const UserBoxMsg = function ({ id }) {
  const dispatch = useDispatch();
  const SetIDCurrentChating = function (iduser) {
    socket.emit("join-room", iduser);
  };
  return (
    <>
      <div
        onClick={() => {
          dispatch(SetIdUser(id));
          SetIDCurrentChating(id);
        }}
      >
        <Grid
          container
          alignContent="center"
          iduser={id}
          className={`${style.UserBoxMsg_Container}`}
        >
          <Grid>
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1vgdYWHDUkyYYYxV4RV78Q4AHDtagK2GRQ&usqp=CAU" />
          </Grid>
          <Grid></Grid>
        </Grid>
      </div>
    </>
  );
};

export default function ListUserLeftSideBar() {
  const [state, setState] = useState(1);
  return (
    <>
      <UserBoxMsg id="123" />
      <UserBoxMsg id="234" />
      <UserBoxMsg id="567" />
    </>
  );
}
