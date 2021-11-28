import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./App.css";
import { NavLink } from "react-router-dom";

function ViewDoctorInformation() {
  // state variables
  const [workerID, setworkerID] = useState("");
  const [firstName, setfirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [counter, setCounter] = useState(0);
  const infocollector = () => {
    Axios.get("http://localhost:3001/api/fetchDoctorID")
      .then(function (response) {
        setfirstName(response.data.first_name);
        setmiddleName(response.data.middle_name);
        setlastName(response.data.last_name);
        setworkerID(response.data.idhealthcare_worker);
        setSpecialization(response.data.specialization);
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
      <div className="homepage">
        <h2>Doctor Information</h2>
        <label>Doctor ID</label>
        <div>{workerID}</div>
        <label>First Name</label>
        <div>{firstName}</div>
        <label>Middle Name</label>
        <div>{middleName}</div>
        <label>Last Name</label>
        <div>{lastName}</div>
        <label>Specialization</label>
        <div>{specialization}</div>
        <NavLink className="nav-link" to="/home">
          <button>Back</button>
        </NavLink>
      </div>
    </div>
  );
}
export default ViewDoctorInformation;
