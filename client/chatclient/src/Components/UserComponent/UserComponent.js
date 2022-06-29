import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Grid } from "@mui/material";
import { useState } from "react";
import { SolidIcon } from "../../util/FontAweSomeIcon";
import ListUserLeftSideBar from "../ListUserLeftSideBar/ListUserLeftSideBar";
import SearchSection from "../SearchSection/SearchSection";
import style from "./UserComponent.module.css";
function UserComponent() {
  const [text, SetText] = useState("");
  const [isSearch, SetIsSearch] = useState(false);
  return (
    <>
      <Grid
        container
        alignItems="center"
        className={`${style.LeftSideBarHeader}`}
      >
        <Grid item lg={2} md={2}>
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1vgdYWHDUkyYYYxV4RV78Q4AHDtagK2GRQ&usqp=CAU" />
        </Grid>
        <Grid item lg={10} md={10}>
          <Grid container justifyContent="space-between">
            <p>Gia Thuận</p>
            <FontAwesomeIcon icon={SolidIcon.faEllipsis} />
          </Grid>
        </Grid>
      </Grid>
      <Grid container alignItems="center" className={`${style.LeftSideInput}`}>
        <Grid item lg={2} md={2} sm={2} className={`${style.InputSearchItem}`}>
          <FontAwesomeIcon
            style={{ padding: "5px 10px" }}
            icon={SolidIcon.faSearch}
          />
        </Grid>
        <Grid
          item
          lg={10}
          md={10}
          sm={10}
          className={`${style.InputSearchItem}`}
          style={{ outline: "none" }}
        >
          <input
            onChange={(e) => {
              if (e.target.value != "") SetIsSearch(true);
              else SetIsSearch(false);
              SetText(e.target.value);
            }}
            value={text}
            placeholder="Search People, Group, Message"
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
      </Grid>
      <div flexWrap="false" container  className={`${style.MainContainer}`}>
        {isSearch ? <SearchSection /> : <ListUserLeftSideBar />}
      </div>
    </>
  );
}

export default UserComponent;
