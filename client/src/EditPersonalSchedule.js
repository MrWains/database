import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./App.css";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";

import checkIDAtom from "./atoms/checkID";
import dayDoctorAtom from "./atoms/dayDoctor"
import entryIDDoctorAtom from "./atoms/entryIDDoctor"
import starthourDoctorAtom from "./atoms/starthourDoctor"
import startminuteDoctorAtom from "./atoms/startminuteDoctor"
import endhourDoctorAtom from "./atoms/endhourDoctor"
import endminuteDoctorAtom from "./atoms/endminuteDoctor"

function EditPersonalSchedule() {
  // state variables
  const [check_id] = useRecoilState(checkIDAtom);
  const [entryIDDoctor, setentryIDDoctor] = useRecoilState(entryIDDoctorAtom);
  const [dayDoctor, setdayDoctor] = useRecoilState(dayDoctorAtom);
  const [starthourDoctor, setstarthourDoctor] = useRecoilState(starthourDoctorAtom);
  const [startminuteDoctor, setstartminuteDoctor] = useRecoilState(startminuteDoctorAtom);
  const [endhourDoctor, setendhourDoctor] = useRecoilState(endhourDoctorAtom);
  const [endminuteDoctor, setendminuteDoctor] = useRecoilState(endminuteDoctorAtom);

  // make update query to backend
  const UpdateSchedule = () =>
  {
    Axios.post("http://localhost:3001/api/updatedoctorschedule", {
      entryID: entryIDDoctor, 
      day: dayDoctor,
      startHour: starthourDoctor,
      startMinute: startminuteDoctor,
      endHour: endhourDoctor,
      endMinute: endminuteDoctor,
      Check_ID: check_id
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="App">
      <div className="homepage">
        <h2>Update Doctor Schedule</h2>
        
        <label>EntryID (e.g: monday)</label>
        <input
              type="text"
              name="entryID"
              value={entryIDDoctor}
              onChange={(e) => {
                setentryIDDoctor(e.target.value);
              }}/>
        <label>Day (e.g: monday)</label>
        <input
              type="text"
              name="day"
              value={dayDoctor}
              onChange={(e) => {
                setdayDoctor(e.target.value);
              }}/>
        <label>Start Hour (24 hour format)</label>
        <input
              type="text"
              name="starthour"
              value={starthourDoctor}
              onChange={(e) => {
                setstarthourDoctor(e.target.value);
              }}/>
        <label>Start Minute</label>
        <input
              type="text"
              name="startminute"
              value={startminuteDoctor}
              onChange={(e) => {
                setstartminuteDoctor(e.target.value);
              }}/>
        <label>End Hour (24 hour format)</label>
        <input
              type="text"
              name="endhour"
              value={endhourDoctor}
              onChange={(e) => {
                setendhourDoctor(e.target.value);
              }}/>

        <label>End Minute</label>
        <input
              type="text"
              name="specialization"
              value={endminuteDoctor}
              onChange={(e) => {
                setendminuteDoctor(e.target.value);
              }}/>

          <NavLink className="nav-link" to="/homehw">
          <button onClick={UpdateSchedule}>Save Changes</button>
        </NavLink>
        <NavLink className="nav-link" to="/homehw">
          <button>Back</button>
        </NavLink>
      </div>
    </div>
  );
}

export default EditPersonalSchedule;