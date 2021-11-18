import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


function Home() {
  // state variables
  const [check_id, setCheck_id] = useState("");
  const [password, setPassword] = useState("");


  const logIn = () => {
    // Axios.post("https://healthatlums-database.herokuapp.com/api/insert/", {ID: id, Name: name,})
    Axios.post("http://localhost:3001/api/checkRole_id", {Check_ID: check_id, Password: password})
    .then(() => 
    {
      loginStatus();
    })
    .catch((err) => 
    {
      console.log(err);
    })
  };

  return (
    <div className="App">
      <div className = "homepage">
        <h2>Home Page</h2>

        <button onClick={logIn}>Add a student</button>
        <button onClick={logIn}>Add a doctor</button>

        <div className = "homepage_search">
          <label>Student ID</label>
          <input type="text" name="ID" onChange={(e) => {
            setCheck_id(e.target.value);
            }}/>

          <button onClick={logIn}>View Information</button>
        </div>

        <div className = "homepage_search">
          <label>Doctor ID</label>
          <input type="text" name="ID" onChange={(e) => {
            setCheck_id(e.target.value);
            }}/>

          <button onClick={logIn}>View Information</button>
        </div>

        <NavLink className="nav-link" to="/">
        <button>LogOut</button>
        </NavLink>
      </div>
    </div>
  );

}

export default Home;