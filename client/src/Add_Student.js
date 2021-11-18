import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import { NavLink } from "react-router-dom";

function Add_Student() {
  // state variables
  const [firstName, setfirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [batch, setBatch] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [emergency, setEmergency] = useState("");
  const [emergencyFName, setEmergencyFName] = useState("");
  const [emergencyLName, setEmergencyLName] = useState("");
  const [rollNumber, setrollNumber] = useState(null);
  const [role_id, setrole_id] = useState(0);
  const [roleidstate, setroleidstate] = useState("/addstudent");


  const addStudent = () => {
    // Axios.post("https://healthatlums-database.herokuapp.com/api/insert/", {ID: id, Name: name,})
    Axios.post("http://localhost:3001/api/addstudent", {firstName: firstName, middleName: middleName, lastName:lastName, batch: batch, contactNumber: contactNumber, emergency: emergency, rollNumber: rollNumber, role_id:role_id, emergencyFName: emergencyFName, emergencyLName: emergencyLName})
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
        <h2>Add Student</h2>
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


        <label>Roll Number</label>
        <input type="text" name="ID" onChange={(e) => {
          setrollNumber(e.target.value);
        }}/>
  
        <label>Contact Number</label>
        <input type="text" name="Password" onChange={(e) => 
          {setcontactNumber(e.target.value);
        }}/>

        <label>Emergency Contact Number</label>
        <input type="text" name="Password" onChange={(e) => 
          {setEmergency(e.target.value);
        }}/>

        <label>Batch</label>
        <input type="text" name="ID" onChange={(e) => {
          setBatch(e.target.value);
        }}/>
  
        <label>Role_ID</label>
        <input type="text" name="Password" onChange={(e) => 
          {setrole_id(e.target.value);
        }}/>

        <label>Emergency First Name</label>
        <input type="text" name="Password" onChange={(e) => 
          {setEmergencyFName(e.target.value);
            }}/>

        <label>Emergency Last Name</label>
        <input type="text" name="Password" onChange={(e) => 
          {setEmergencyLName(e.target.value);
        }}/>


        <NavLink className="nav-link" to = "/addstudent">  
        <button onClick={addStudent} >Add a student</button>
        </NavLink>

        <NavLink className="nav-link" to = "/home">  
        <button  >Back</button>
        </NavLink>
        
      </div>
    </div>
  );

}

export default Add_Student;