import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./App.css";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";

function AddDoctor() {
  // state variables
  const [workerID, setworkerID] = useState("");
  const [role_id, setrole_id] = useState(3);
  const [firstName, setfirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [password, setPassword] = useState("");
  const [mover, setMover] = useState(0);

  const adddoctor = () => {
    // Axios.post("https://healthatlums-database.herokuapp.com/api/adddoctor", {
    Axios.post("http://localhost:3001/api/adddoctor", {
      workerID: workerID,
      role_id: role_id,
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      specialziation: specialization,
      password: password,
    })
      .then(() => {
        console.log("Doctor record_added");
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
          <div className="homepage">
            <h2>Add Doctor</h2>

            <label>worker ID</label>
            <input
              type="text"
              name="ID"
              onChange={(e) => {
                setworkerID(e.target.value);
              }}
            />

            <label>First Name</label>
            <input
              type="text"
              name="ID"
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
            />

            <label>Middle Name</label>
            <input
              type="text"
              name="Password"
              onChange={(e) => {
                setmiddleName(e.target.value);
              }}
            />

            <label>Last Name</label>
            <input
              type="text"
              name="ID"
              onChange={(e) => {
                setlastName(e.target.value);
              }}
            />

            <label>Specialization</label>
            <input
              type="text"
              name="ID"
              onChange={(e) => {
                setSpecialization(e.target.value);
              }}
            />

            <label>Password</label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <NavLink className="nav-link" to="/adddoctor">
              <button onClick={adddoctor}>Add doctor</button>
            </NavLink>

            <NavLink className="nav-link" to="/home">
              <button>Back</button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddDoctor;
