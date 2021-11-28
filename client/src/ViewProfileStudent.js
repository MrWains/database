import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./App.css";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import checkIDAtom from "./atoms/checkID";

function ViewProfileStudent() {
  // state variables
  const [check_id] = useRecoilState(checkIDAtom);
  const [firstName, setfirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [batch, setBatch] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [emergency, setEmergency] = useState("");
  const [emergencyFName, setEmergencyFName] = useState("");
  const [emergencyLName, setEmergencyLName] = useState("");
  const [rollNumber, setrollNumber] = useState(null);
  const [password, setPassword] = useState("");
  Axios.post("http://localhost:3001/api/fetchStudentID", {
    Student_ID: check_id,
  });
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
      setPassword(response.data.password);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="App">
      <div className="homepage">
        <h2>My Profile</h2>
        <label>First Name</label>
        <div>{firstName}</div>
        <label>Middle Name</label>
        <div>{middleName}</div>
        <label>Last Name</label>
        <div>{lastName}</div>
        <label>Roll Number</label>
        <div>{rollNumber}</div>
        <label>Contact Number</label>
        <div>{contactNumber}</div>
        <label>Batch</label>
        <div>{batch}</div>
        <label>Emergency First Name</label>
        <div>{emergencyFName}</div>
        <label>Emergency Last Name</label>
        <div>{emergencyLName}</div>
        <label>Emergency Contact Number</label>
        <div>{emergency}</div>
        <label>Password </label>
        <div>{password}</div>

        <NavLink className="nav-link" to="/homestudent">
          <button>Back</button>
        </NavLink>
      </div>
    </div>
  );
}
export default ViewProfileStudent;
