import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./App.css";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";

import checkIDAtom from "./atoms/checkID";
import firstNameDoctorAtom from "./atoms/firstNameDoctor"
import middleNameDoctorAtom from "./atoms/middleNameDoctor"
import lastNameDoctorAtom from "./atoms/lastNameDoctor"
import specializationDoctorAtom from "./atoms/specializationDoctor"

function EditPersonalProfile() {
  // state variables
  const [check_id] = useRecoilState(checkIDAtom);
  const [firstNameDoctor, setFirstNameDoctor] = useRecoilState(firstNameDoctorAtom);
  const [middleNameDoctor, setMiddleNameDoctor] = useRecoilState(middleNameDoctorAtom);
  const [lastNameDoctor, setLastNameDoctor] = useRecoilState(lastNameDoctorAtom);
  const [specializationDoctor, setSpecializationDoctor] = useRecoilState(specializationDoctorAtom);

  // make update query to backend
  const UpdateProfile = () =>
  {
    Axios.post("http://localhost:3001/api/updatedoctorprofile", {
      firstName: firstNameDoctor,
      middleName: middleNameDoctor,
      lastName: lastNameDoctor,
      specialziation: specializationDoctor,
      Check_ID: check_id
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="App">
      <div className="topbar"> Health@LUMS</div>
      <div className="homepage">
        <div className="container">
        <h2>Update Doctor Information</h2>
        <label>First Name</label>
        <input
              type="text"
              name="firstname"
              value={firstNameDoctor}
              onChange={(e) => {
                setFirstNameDoctor(e.target.value);
              }}/>
        <label>Middle Name</label>
        <input
              type="text"
              name="middlename"
              value={middleNameDoctor}
              onChange={(e) => {
                setMiddleNameDoctor(e.target.value);
              }}/>
        <label>Last Name</label>
        <input
              type="text"
              name="lastname"
              value={lastNameDoctor}
              onChange={(e) => {
                setLastNameDoctor(e.target.value);
              }}/>
        <label>Specialization</label>

        <input
              type="text"
              name="specialization"
              value={specializationDoctor}
              onChange={(e) => {
                setSpecializationDoctor(e.target.value);
              }}/>

          <NavLink className="nav-link" to="/homehw">
          <button onClick={UpdateProfile}>Save Changes</button>
        </NavLink>
        <NavLink className="nav-link" to="/homehw">
          <button>Back</button>
        </NavLink>
      </div>
      </div>
    </div>
  );
}

export default EditPersonalProfile;