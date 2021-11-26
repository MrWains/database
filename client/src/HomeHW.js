import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function HomeHW() {
  // state variables
  const [check_id, setCheck_id] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <h2>HOME_HW</h2>

      <label>ID</label>
      <input
        type="text"
        name="ID"
        onChange={(e) => {
          setCheck_id(e.target.value);
        }}
      ></input>
      <label>Password</label>
      <input
        type="text"
        name="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <NavLink className="nav-link" to="/">
        <button>LogOut</button>
      </NavLink>
    </div>
  );
}

export default HomeHW;
