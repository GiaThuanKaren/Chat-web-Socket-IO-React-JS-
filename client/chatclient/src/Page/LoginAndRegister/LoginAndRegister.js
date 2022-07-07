import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import style from "./LoginAndRegister.module.css";
import { useLocation } from "react-router-dom";
import axious from "axios";
function RegisterAndLoginComp() {
  const location = useLocation();
  // console.log(location.pathname);
  const [properties, Setproperties] = useState({
    Email: "",
    Pass: "",
    RePass: "",
    Name: "",
  });
  async function Fetch() {
    if (properties.Pass === properties.RePass) {
      try {
        let { data } = await axious.post(`http://localhost:5001${location.pathname}`, {
          name: properties.Name,
          email: properties.Email,
          password: properties.Pass,
        });
        console.log("Respone from server ", data);
        if (data.status == 404) {
          alert(data.msg);
        }
        if (data.status == 200) {
          alert(data.msg);
        }
      } catch (e) {
        console.log(e, "Login Regis 25");
      }
    } else alert("Pass it not valid , try again");
  }
  // fetch(``)
  return (
    <>
      <Grid item>
        <form>
          <label>Name</label>
          <input
            onChange={(e) => {
              Setproperties({
                ...properties,
                Name: e.target.value,
              });
            }}
          />
          <br />

          <label>Email</label>
          <input
            value={properties.Email}
            onChange={(e) => {
              Setproperties({
                ...properties,
                Email: e.target.value,
              });
            }}
            name="email"
          />
          <br />
          <label>Pass</label>
          <input
            onChange={(e) => {
              Setproperties({
                ...properties,
                Pass: e.target.value,
              });
            }}
            name="pass"
          />
          <br />
          <label>ReInput Pass</label>
          <input
            onChange={(e) => {
              Setproperties({
                ...properties,
                RePass: e.target.value,
              });
            }}
          />
          <br />
          <button
            onClick={(e) => {
              e.preventDefault();
              Fetch();
            }}
          >
            Register
          </button>
        </form>
      </Grid>
    </>
  );
}

function LoginAndRegister() {
  return (
    <>
      <Grid
        style={{ height: "100%" }}
        container
        justifyContent={"center"}
        alignItems={"center"}
      >
        <RegisterAndLoginComp />
      </Grid>
    </>
  );
}

export default LoginAndRegister;
