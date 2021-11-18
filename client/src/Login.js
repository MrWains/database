import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import { Navigate } from "react-router-dom";

function Login() {
  // state variables
  const [check_id, setCheck_id] = useState("");
  const [password, setPassword] = useState("");
  const [responseData, setResponseData] = useState(0);

  const loginStatus = () => {
    Axios.get("https://healthatlums-database.herokuapp.com/api/send").then(
      function (response) {
        if (response.data === 1) {
          setResponseData(1);
        } else if (response.data === 2) {
          setResponseData(2);
        } else if (response.data === 3) {
          setResponseData(3);
        } else {
          alert("Invalid Login Information!");
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
      {responseData === 1 ? (
        <Navigate to="/home" />
      ) : responseData === 2 ? (
        <Navigate to="/homestudent" />
      ) : responseData === 3 ? (
        <Navigate to="/homehw" />
      ) : (
        <div className="login`">
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

          <button onClick={logIn}>Log In</button>
        </div>
      )}
    </div>
  );
}

export default Login;
