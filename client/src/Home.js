import React from "react";
import Axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import addressAtom from "./atoms/address";
import phoneNumAtom from "./atoms/phoneNum";

function Home() {
  // state variables
  const [student_id, setStudent_id] = useState("");
  const [doctor_id, setDoctor_id] = useState("");
  const [mover, setMover] = useState(0);

  const [address, setAddress] = useRecoilState(addressAtom);
  const [phone_num, setPhone_Num] = useRecoilState(phoneNumAtom);

  // listen to the response of fetch query and set aomic states accordingly to be passed
  const updateContact = () => {
    Axios.get("http://localhost:3001/api/sendContactUs").then(function (
      response
    ) {
      // set global states for printing
      setAddress(response.data.address);
      setPhone_Num(response.data.phone_num);
    });
  };

  // makes call to backend to execute fetch query
  const fetchContactUs = () => {
    // send fetch query
    Axios.post("http://localhost:3001/api/contactus")
      .then(() => {
        updateContact();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const displayFetchedStudent = () => {
    // Axios.get("https://healthatlums-database.herokuapp.com/api/fetchStudentID")
    Axios.get("http://localhost:3001/api/fetchStudentID")
      .then(function (response) {
        if (response.data !== "Invalid Student ID Entered!") {
          setMover(1);
        }
        if (response.data === "Invalid Student ID Entered!") {
          alert("Invalid Student ID Entered!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchStudentID = () => {
    // Axios.post("https://healthatlums-database.herokuapp.com/api/fetchStudentID", { Student_ID: student_id })
    Axios.post("http://localhost:3001/api/fetchStudentID", {
      Student_ID: student_id,
    })
      .then(() => {
        displayFetchedStudent();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const displayFetchedDoctor = () => {
    // Axios.get("https://healthatlums-database.herokuapp.com/api/fetchDoctorID")
    Axios.get("http://localhost:3001/api/fetchDoctorID")
      .then(function (response) {
        if (response.data !== "Invalid Doctor ID Entered!") {
          setMover(2);
        }
        if (response.data === "Invalid Doctor ID Entered!") {
          alert("Invalid Doctor ID Entered!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchDoctorID = () => {
    // Axios.post("https://healthatlums-database.herokuapp.com/api/fetchDoctorID", { Doctor_ID: doctor_id,})
    Axios.post("http://localhost:3001/api/fetchDoctorID", {
      Doctor_ID: doctor_id,
    })
      .then(() => {
        displayFetchedDoctor();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {mover === 1 ? (
        <Navigate to="/viewstudentinformation" />
      ) : mover === 2 ? (
        <Navigate to="/viewdoctorinformation" />
      ) : (
        <div className="App">
          <div className="homepage">
            
            <h2>Admin Home Page</h2>
            
            <NavLink className="nav-link" to="/addstudent">
              <button>Add a student</button>
            </NavLink>

            <NavLink className="nav-link" to="/adddoctor">
              <button>Add a doctor</button>
            </NavLink>

            <div className="homepage_search">
              <label>Student ID</label>
              <input
                type="text"
                name="student-id"
                onChange={(e) => {
                  setStudent_id(e.target.value);
                }}
              />
              <button onClick={fetchStudentID}>View Information</button>
            </div>

            <div className="homepage_search">
              <label>Doctor ID</label>
              <input
                type="text"
                name="doctor-id"
                onChange={(e) => {
                  setDoctor_id(e.target.value);
                }}
              />
              <button onClick={fetchDoctorID}>View Information</button>
            </div>

            <NavLink className="nav-link" to="/editcontactus">
              <button onClick={fetchContactUs}>Edit Contact Us</button>
            </NavLink>
            
            <NavLink className="nav-link" to="/viewcomplaintssuggestions">
              <button>View Complaints/Suggestions</button>
            </NavLink>

            <NavLink className="nav-link" to="/">
              <button>LogOut</button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
