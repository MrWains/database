import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


function Home() {
  // state variables
  const [check_id, setCheck_id] = useState("");
  const [password, setPassword] = useState("");
  const [roleidstate, setroleidstate] = useState("/home");


  return (
    <div className="App">
      <div className = "homepage">
        <h2>Admin Home Page</h2>
        <NavLink className="nav-link" to = "/addstudent">  
        <button>Add a student</button>
        </NavLink>

        <NavLink className="nav-link" to = "/adddoctor">  
        <button >Add a doctor</button>
        </NavLink>
        <div className = "homepage_search">
          <label>Student ID</label>
          <input type="text" name="ID" onChange={(e) => {
            setCheck_id(e.target.value);
            }}/>

          <button >View Information</button>
        </div>

        <div className = "homepage_search">
          <label>Doctor ID</label>
          <input type="text" name="ID" onChange={(e) => {
            setCheck_id(e.target.value);
            }}/>

          <button>View Information</button>
        </div>

        <NavLink className="nav-link" to="/">
        <button>LogOut</button>
        </NavLink>
      </div>
    </div>
  );

}

export default Home;