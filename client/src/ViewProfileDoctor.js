import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./App.css";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import checkIDAtom from "./atoms/checkID";

function ViewProfileDoctor() {
  // state variables
  const [counter, setCounter] = useState(0);
  const [check_id] = useRecoilState(checkIDAtom);
  const [workerID, setworkerID] = useState("");
  const [firstName, setfirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [password, setPassword] = useState("");
  const profilecollector = () => {
    Axios.post("http://localhost:3001/api/fetchDoctorID", {
      Doctor_ID: check_id,
    });
    Axios.get("http://localhost:3001/api/fetchDoctorID")
      .then(function (response) {
        setfirstName(response.data.first_name);
        setmiddleName(response.data.middle_name);
        setlastName(response.data.last_name);
        setworkerID(response.data.idhealthcare_worker);
        setPassword(response.data.password);
        setSpecialization(response.data.specialization);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (counter === 0) {
    profilecollector();
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
        <label>Password</label>
        <div>{password}</div>
        <NavLink className="nav-link" to="/home">
          <button>Back</button>
        </NavLink>
      </div>
    </div>
  );
}
export default ViewProfileDoctor;
