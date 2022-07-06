import React, { useState } from "react";
import style from "./LoginAndRegister.module.css";
import axious from "axios"
function LoginComp(){
  const [properties, Setproperties] = useState({
    Email: "",
    Pass: "",
    RePass: "",
  });
  // fetch(``)
  return (
    <>
      <div>
        <form>
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
          <button>Register</button>
        </form>
      </div>
    </>
  );
}

function LoginAndRegister() {
 return (
  <>
    <LoginComp/>
  </>
 )
}

export default LoginAndRegister;
