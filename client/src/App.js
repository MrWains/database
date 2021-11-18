import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  // state variables
  const [check_id, setCheck_id] = useState("");
  const [password, setPassword] = useState("");

  const loginStatus = () => 
  {
    console.log("in status: ")
    Axios.get(`http://localhost:3001/api/send`)
    .then(function(response) 
    {
      console.log(response.data);

      // if error then diplay error


      // else check if 1 (display admin), 2 (display doctor), 3 (display student)
    })
  }

  const logIn = () => {
    console.log("In Login: ")
    console.log("ID: ", check_id, "Pwd: ", password)
    // Axios.post("https://healthatlums-database.herokuapp.com/api/insert/", {ID: id, Name: name,})
    Axios.post("http://localhost:3001/api/checkRole_id", {Check_ID: check_id, Password: password})
    .then(() => 
    {
      // setCheck_id("");
      // setPassword("");
      console.log("In login then: ")
      loginStatus();
    })
    .catch((err) => 
    {
      console.log("In login err: ")
      // setCheck_id("");
      // setPassword("");
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
