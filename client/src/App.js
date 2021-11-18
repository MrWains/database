import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  // state variables
  const [check_id, setCheck_id] = useState("");
  const [password, setPassword] = useState("");

  const logIn = () => {
    // Axios.post("https://healthatlums-database.herokuapp.com/api/insert/", {ID: id, Name: name,})
    Axios.post("http://localhost:3001/api/checkRole_id", {Check_ID: check_id, Password: password})
    .then(() => 
    {
      alert("Sucessful Insert!");
    })
    .catch((err) => 
    {
      console.log(err);
    })
  };

  return (
    <div className="App">
      <h2>Log In</h2>

      <label>ID</label>
      <input type="text" name="ID" onChange={(e) => {setCheck_id(e.target.value);}}></input>
      <label>Password</label>
      <input type="text" name="Password" onChange={(e) => {setPassword(e.target.value);}}></input>

      <button onClick={logIn}>Log In</button>
    </div>
  );
}

export default App;
