import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";

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
  const [role_id, setrole_id] = useState(2);
  const [password, setPassword] = useState("");
  const [roleidstate, setroleidstate] = useState("/addstudent");
  const [mover, setMover] = useState(0);

  const addStudent = () => {
    // Axios.post("https://healthatlums-database.herokuapp.com/api/addstudent", {
    Axios.post("http://localhost:3001/api/addstudent", {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      batch: batch,
      contactNumber: contactNumber,
      emergency: emergency,
      rollNumber: rollNumber,
      role_id: role_id,
      emergencyFName: emergencyFName,
      emergencyLName: emergencyLName,
      password: password,
    })
      .then(() => {
        setMover(1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {mover === 1 ? (
        <Navigate to="/home" />
      ) : (
        <div className="App">
          <div className="topbar"> Health@LUMS</div>
          <div className="homepage">
          <div className = "container">
            <h2>Add Student</h2>
            <label>First Name</label>
            <input
              type="text"
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
            />

            <label>Middle Name</label>
            <input
              type="text"
              onChange={(e) => {
                setmiddleName(e.target.value);
              }}
            />

            <label>Last Name</label>
            <input
              type="text"
              onChange={(e) => {
                setlastName(e.target.value);
              }}
            />

            <label>Roll Number</label>
            <input
              type="text"
              onChange={(e) => {
                setrollNumber(e.target.value);
              }}
            />

            <label>Contact Number</label>
            <input
              type="text"
              onChange={(e) => {
                setcontactNumber(e.target.value);
              }}
            />

            <label>Batch</label>
            <input
              type="text"
              onChange={(e) => {
                setBatch(e.target.value);
              }}
            />

            <label>Emergency First Name</label>
            <input
              type="text"
              onChange={(e) => {
                setEmergencyFName(e.target.value);
              }}
            />

            <label>Emergency Last Name</label>
            <input
              type="text"
              onChange={(e) => {
                setEmergencyLName(e.target.value);
              }}
            />

            <label>Emergency Contact Number</label>
            <input
              type="text"
              onChange={(e) => {
                setEmergency(e.target.value);
              }}
            />

            <label>Password </label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <NavLink className="nav-link" to="/addstudent">
              <button onClick={addStudent}>Add a student</button>
            </NavLink>

            <NavLink className="nav-link" to="/home">
              <button>Back</button>
            </NavLink>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Add_Student;
