import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./App.css";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import roleIDAtom from "./atoms/roleID";


function ViewDoctorsSchedule() {
  // listen to the response of fetch query and set aomic states accordingly to be passes
  const [array, setArray] = useState("");
  const [counter, setCounter] = useState(0);
  const [role_id, setRole_id] = useRecoilState(roleIDAtom);

  const listmaker = (list) => {
    const arr = [];
    for (let i = 0, len = list.length; i < len; i++) {
      arr.push(
        <div>
          <h3>Doctor {i + 1}</h3>
          <div>Doctor ID: {list[i].hid}</div>
          <div>Days: {list[i].days}</div>
          <div>Starting Time: {list[i].start_hour}:{list[i].start_minute}</div>
          <div>End Time: {list[i].end_hour}:{list[i].end_minute}</div>
        </div>
        
      );
    }
    setArray(arr); //id, hid, days, start hour, start min, end hour, end min
  };

  const updateDoctorsSchedule = () => {
    Axios.get("http://localhost:3001/api/sendDoctorSchedule").then(function (
      response
    ) {
      listmaker(response.data);
    });
  };

  // makes call to backend to execute fetch query
  const fetchDoctorsSchedule = () => {
    // send fetch query
    Axios.post("http://localhost:3001/api/doctorSchedule")
      .then(() => {
        updateDoctorsSchedule();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (counter === 0) {
    fetchDoctorsSchedule();
    setCounter(1);
  }

  return (
    <div className="App">
      <div className="homepage">
        <h2>Doctor Schedule</h2>
        <div>{array}</div>

        {role_id === 2 ? (
        <NavLink className="nav-link" to="/scheduleappointment">
          <button>Schedule Appointment</button>
        </NavLink>
        ):(<h2 Illegal Role_ID />) }

        {role_id === 2 ? (
          <NavLink className="nav-link" to="/homestudent">
            <button>Back</button>
          </NavLink>

        ):role_id === 3 ? (
          <NavLink className="nav-link" to="/homehw">
            <button>Back</button>
          </NavLink>
        ):(<h2 Illegal Role_ID />) }
      </div>
    </div>
  );
}
export default ViewDoctorsSchedule;