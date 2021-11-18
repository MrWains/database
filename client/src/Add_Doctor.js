import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import { NavLink } from "react-router-dom";

function Add_Doctor() {
  // state variables
  const [workerID, setworkerID] = useState("");
  const [role_id, setrole_id] = useState(0);
  const [firstName, setfirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [specialization, setSpecialization] = useState("");
 

  const [roleidstate, setroleidstate] = useState("/adddoctor");


  const adddoctor = () => {
    // Axios.post("https://healthatlums-database.herokuapp.com/api/insert/", {ID: id, Name: name,})
    Axios.post("http://localhost:3001/api/adddoctor", {workerID:workerID , role_id:role_id ,firstName: firstName, middleName: middleName, lastName:lastName, specialziation: specialization})
    .then(() => 
    {
      console.log("record_added")
    })
    .catch((err) => 
    {
      console.log(err);
    })
  };

  return (
    <div className="App">
      <div className = "homepage">
        <h2>Add Doctor</h2>

        <label>worker ID</label>
        <input type="text" name="ID" onChange={(e) => {
          setworkerID(e.target.value);
        }}/>

        <label>role_id</label>
        <input type="text" name="ID" onChange={(e) => {
          setrole_id(e.target.value);
        }}/>

        <label>First Name</label>
        <input type="text" name="ID" onChange={(e) => {
          setfirstName(e.target.value);
        }}/>
  
        <label>Middle Name</label>
        <input type="text" name="Password" onChange={(e) => 
          {setmiddleName(e.target.value);
        }}/>

        <label>Last Name</label>
        <input type="text" name="ID" onChange={(e) => {
          setlastName(e.target.value);
        }}/>


        <label>Specialization</label>
        <input type="text" name="ID" onChange={(e) => {
          setSpecialization(e.target.value);
        }}/>

        <NavLink className="nav-link" to = "/adddoctor">  
        <button onClick={adddoctor} >Add doctor</button>
        </NavLink>

        <NavLink className="nav-link" to = "/home">  
        <button  >Back</button>
        </NavLink>
        
      </div>
    </div>
  );

}

export default Add_Doctor;