import React from "react";
import Axios from "axios";
import "./App.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import checkIDAtom from "./atoms/checkID";
import roleIDAtom from "./atoms/roleID";

function ScheduleAppointment() {
  // state variables
  const [hid, setHID] = useState(0);
  const [sid, setSID] = useState(0);
  const [day, setDay] = useState("");
  const [start_hour, setStartHour] = useState("");
  const [start_minute, setStartMinute] = useState("");
  const [slot_status,setSlotStatus] = useState(0);
  const [mover,setMover] = useState(0);

  const [check_id, setCheck_id] = useRecoilState(checkIDAtom);
  const [role_id, setRole_id] = useRecoilState(roleIDAtom);

  //generates SQL write query to add to feedback
  const scheduleAppointment = () => 
  {
    Axios.post("http://localhost:3001/api/scheduleAppointment", 
    {H_ID: hid, S_ID: sid, day:day, startHour:start_hour, startMinute: start_minute, slotStatus:slot_status})
    .then(() => {
      setMover(1);
    })
    .catch((err) => {
      alert("Error In Submitting Complain");
    });
  }

  return (
    <div>
      {role_id === 2 ? (
      <div className="App">
        <div className="homepage">
          <h2>Schedule an Appointment</h2>

          <label>Doctor ID</label>
          <input 
            type="text" 
            onChange={(e) => {
              setHID(e.target.value);
            }}/>

          <label>Student ID</label>
          <input
            type="text"
            onChange={(e) => {
              setSID(e.target.value);
            }}
          />

          <label>Day (e.g: monday)</label>
          <input
            type="text"
            onChange={(e) => {
              setDay(e.target.value);
            }}
          />

          <label>Time - Hour (e.g: 14)</label>
          <input
            type="text"
            onChange={(e) => {
              setStartHour(e.target.value);
            }}
          />

          <label>Time - Minutes (e.g: 45)</label>
          <input
            type="text"
            onChange={(e) => {
              setStartMinute(e.target.value);
            }}
          />


          <NavLink className="nav-link" to="/homestudent">
            <button onClick={scheduleAppointment}>Submit</button>
          </NavLink>

          <NavLink className="nav-link" to="/viewdoctorsschedule">
            <button>Back</button>
          </NavLink>
        </div>
      </div>
        ): (<h2 Illegal Role_ID and Mover />)}
    </div>
  );
}

export default ScheduleAppointment;