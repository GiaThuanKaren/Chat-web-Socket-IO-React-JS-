import { Grid } from "@mui/material";
import React from "react";
import LeftSideBar from "../../Components/LeftSidebar/LeftSideBar";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";

function ChatSection() {
  return (
    <div>
      <Grid container>
        <LeftSideBar />
        <RightSideBar />
      </Grid>
    </div>
  );
}

export default ChatSection;
