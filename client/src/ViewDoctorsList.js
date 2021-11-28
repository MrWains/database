import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./App.css";
import { NavLink } from "react-router-dom";
function ViewDoctorsList() {
  // listen to the response of fetch query and set aomic states accordingly to be passes
  const [array, setArray] = useState("");
  const [counter, setCounter] = useState(0);

  const listmaker = (list) => {
    const arr = [];
    for (let i = 0, len = list.length; i < len; i++) {
      arr.push(
        <div>
          <h3>Doctor {i + 1}</h3>
          <label>First Name:</label>
          <div>{list[i].first_name}</div>
          <label>Middle Name:</label>
          <div>{list[i].middle_name}</div>
          <label>Last Name:</label>
          <div>{list[i].last_name}</div>
          <label>Specialization:</label>
          <div>{list[i].specialization}</div>
        </div>
      );
    }
    setArray(arr);
  };

  const updateDoctorList = () => {
    Axios.get("http://localhost:3001/api/sendDoctorsList").then(function (
      response
    ) {
      listmaker(response.data);
    });
  };

  // makes call to backend to execute fetch query
  const fetchDoctorList = () => {
    // send fetch query
    Axios.post("http://localhost:3001/api/doctorslist")
      .then(() => {
        updateDoctorList();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (counter === 0) {
    fetchDoctorList();
    setCounter(1);
  }

  return (
    <div className="App">
      <div className="homepage">
        <h2>Doctor List</h2>
        <div>{array}</div>
        <NavLink className="nav-link" to="/homestudent">
          <button>Back</button>
        </NavLink>
      </div>
    </div>
  );
}
export default ViewDoctorsList;
