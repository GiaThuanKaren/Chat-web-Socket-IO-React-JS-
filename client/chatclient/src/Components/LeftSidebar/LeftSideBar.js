import { Grid } from "@mui/material";
import style from "./LeftSideBar.module.css";
import { io } from "socket.io-client";
import { useState } from "react";
const socket = io("localhost:5000");
function LeftSideBar() {
 
  return (
    <>
      <Grid item lg={3} md={3} sm={2}>
        <div className={`hidden-xs ${style.LeftSideBar}`}></div>
      </Grid>
    </>
  );
}

export default LeftSideBar;
