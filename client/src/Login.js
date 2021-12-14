import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./App.css";
import { Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import passwordAtom from "./atoms/password";
import checkIDAtom from "./atoms/checkID";
import roleIDAtom from "./atoms/roleID";

function Login() {
  // state variables
  const [responseData, setResponseData] = useState(0);
  
  const [password, setPassword] = useRecoilState(passwordAtom);
  const [check_id, setCheck_id] = useRecoilState(checkIDAtom);
  const [role_id, setRole_id] = useRecoilState(roleIDAtom);

  const loginStatus = () => {
    // Axios.get("http://healthatlums-database.herokuapp.com/api/send").then(
    Axios.get("http://localhost:3001/api/send").then(
      function (response) {
        if (response.data === 1) {
          setRole_id(1);
          setResponseData(1);
        } else if (response.data === 2) {
          setRole_id(2);
          setResponseData(2);
        } else if (response.data === 3) {
          setRole_id(3);
          setResponseData(3);
        } else {
          alert("Invalid Login Information!");
        }
      }
    );
  };

  const logIn = () => {
    // Axios.post("https://healthatlums-database.herokuapp.com/api/checkRole_id", {
    //   Check_ID: check_id,
    //   Password: password,
    // })
    Axios.post("http://localhost:3001/api/checkRole_id", {
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
        <div className="login">
          <div className= "container" > 
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
        </div>
      )}
      
    </div>
  );
}

export default Login;
