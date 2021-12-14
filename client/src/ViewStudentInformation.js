import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./App.css";
import { NavLink } from "react-router-dom";

function ViewStudentInformation() {
  // state variables
  const [counter, setCounter] = useState(0);
  const [firstName, setfirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [batch, setBatch] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [emergency, setEmergency] = useState("");
  const [emergencyFName, setEmergencyFName] = useState("");
  const [emergencyLName, setEmergencyLName] = useState("");
  const [rollNumber, setrollNumber] = useState(null);

  const infocollector = () => {
    Axios.get("http://localhost:3001/api/fetchStudentID")
      .then(function (response) {
        setfirstName(response.data.first_name);
        setmiddleName(response.data.middle_name);
        setlastName(response.data.last_name);
        setBatch(response.data.batch);
        setcontactNumber(response.data.contact_number);
        setEmergency(response.data.contact_number);
        setEmergencyFName(response.data.emergency_contact_first_name);
        setEmergencyLName(response.data.emergency_contact_last_name);
        setrollNumber(response.data.idstudent);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (counter === 0) {
    infocollector();
    setCounter(1);
  }

  return (
    <div className="App">
      <div className="topbar"> Health@LUMS</div>
      <div className="homepage">
      <div className = "container">
        <h2>Student Information</h2>
        <label >First Name</label>
        <div className = "label-black" >{firstName}</div>
        <label>Middle Name</label>
        <div className = "label-black" >{middleName}</div>
        <label>Last Name</label>
        <div className = "label-black">{lastName}</div>
        <label>Roll Number</label>
        <div className = "label-black">{rollNumber}</div>
        <label>Contact Number</label>
        <div className = "label-black">{contactNumber}</div>
        <label>Batch</label>
        <div className = "label-black">{batch}</div>
        <label>Emergency First Name</label>
        <div className = "label-black">{emergencyFName}</div>
        <label>Emergency Last Name</label>
        <div className = "label-black">{emergencyLName}</div>
        <label>Emergency Contact Number</label>
        <div className = "label-black">{emergency}</div>

        <NavLink className="nav-link" to="/home">
          <button>Back</button>
        </NavLink>
      </div>
      </div>
    </div>
  );
}
export default ViewStudentInformation;
