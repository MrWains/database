import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import { Navigate } from "react-router-dom";

function Login() {
  // state variables
  const [check_id, setCheck_id] = useState("");
  const [password, setPassword] = useState("");
  const [roleidstate, setroleidstate] = useState("/");

  const loginStatus = () => {
    Axios.get(`https://healthatlums-database.herokuapp.com/api/send`).then(
      function (response) {
        // console.log(response.data);

        // else check if 1 (display admin), 2 (display doctor), 3 (display student)
        console.log(response.data);
        if (response.data === 1) {
          <Navigate to="/admin" />;
        } else if (response.data === 2) {
          <Navigate to="/homestudent" />;
        } else if (response.data === 3) {
          <Navigate to="/homehw" />;
        }
        // if error then diplay error and do not change any page
        else {
          alert("Invalid Login!");
        }
      }
    );
  };

  const logIn = () => {
    // Axios.post("https://healthatlums-database.herokuapp.com/api/insert/", {ID: id, Name: name,})
    Axios.post("https://healthatlums-database.herokuapp.com/api/checkRole_id", {
      Check_ID: check_id,
      Password: password,
    })
      .then(() => {
        loginStatus();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="login">
        <h2>Log In</h2>

        <label>ID</label>
        <input
          type="text"
          name="ID"
          onChange={(e) => {
            setCheck_id(e.target.value);
          }}
        />

        <label>Password</label>
        <input
          type="password"
          name="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <NavLink className="nav-link" to={roleidstate}>
          <button onClick={logIn}>Log In</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Login;
