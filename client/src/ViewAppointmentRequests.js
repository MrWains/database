import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./App.css";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import roleIDAtom from "./atoms/roleID";


function ViewAppointmentRequests() {
  // listen to the response of fetch query and set aomic states accordingly to be passes
  const [array, setArray] = useState("");
  const [counter, setCounter] = useState(0);
  const [role_id, setRole_id] = useRecoilState(roleIDAtom);

  const listmaker = (list) => {
    const arr = [];
    for (let i = 0, len = list.length; i < len; i++) {
      arr.push(
        <div>
          <h3>----------------</h3>
          <div>Entry ID: {list[i].idappointment}</div>
          <div>Doctor ID: {list[i].h_ID}</div>
          <div>Student ID: {list[i].s_ID}</div>
          <div>Day: {list[i].day}</div>
          <div>Requested Time: {list[i].start_hour}:{list[i].start_minute}</div>
          <div>
          <NavLink className="nav-link" to="/homehw">
            <button onClick={approveRequest}>Approve Request</button>
          </NavLink>
          </div>
        </div>
      );
    }
    setArray(arr); //id, hid, day, start hour, start min, end hour, end min
  };

  const updateAppointmentRequests = () => {
    Axios.get("http://localhost:3001/api/sendAppointmentRequests").then(function (
      response
    ) {
      listmaker(response.data);
    });
  };

  // makes call to backend to execute fetch query
  const fetchAppointmentRequests = () => {
    // send fetch query
    Axios.post("http://localhost:3001/api/AppointmentRequests")
      .then(() => {
        updateAppointmentRequests();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (counter === 0) {
    fetchAppointmentRequests();
    setCounter(1);
  }

  const approveRequest = () => 
  {
    // Axios.post("http://localhost:3001/api/addComplaint_student", {Complain_ID: ID, Complain_Title: title, Complain_Description: description, User_ID: check_id})
    // .then(() => {
    //   setMover(1);
    // })
    // .catch((err) => {
    //   alert("Error In Submitting Complain");
    // });

  }

  return (
    <div className="App">
      <div className="homepage">
        <h2>Appointment Requests</h2>

        <div>{array}</div>

        {role_id === 3 ? (
          <NavLink className="nav-link" to="/homehw">
            <button>Back</button>
          </NavLink>
        ):(<h2 Illegal Role_ID />) }
      </div>
    </div>
  );
}
export default ViewAppointmentRequests;