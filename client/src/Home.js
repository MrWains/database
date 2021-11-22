import React from "react";
import Axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import counterAtom from "./counter";

function Home() {
  // state variables
  //const [check_id, setCheck_id] = useState("");
  //const [password, setPassword] = useState("");
  // const [roleidstate, setroleidstate] = useState("/home");
  const [student_id, setStudent_id] = useState("");
  const [doctor_id, setDoctor_id] = useState("");
  const [roleidstate, setroleidstate] = useState("/home");
  const [count, setCount] = useRecoilState(counterAtom);

  const displayFetchedStudent = () => {
    Axios.get("https://healthatlums-database.herokuapp.com/api/fetchStudentID")
      .then(function (response) {
        console.log(response.data); /////////////////////// fetched from backend and now needs to be displayed
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchStudentID = () => {
    Axios.post(
      "https://healthatlums-database.herokuapp.com/api/fetchStudentID",
      { Student_ID: student_id }
    )
      .then(() => {
        displayFetchedStudent();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const displayFetchedDoctor = () => {
    Axios.get("https://healthatlums-database.herokuapp.com/api/fetchDoctorID")
      .then(function (response) {
        console.log(response.data); /////////////////////// fetched from backend and now needs to be displayed
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchDoctorID = () => {
    Axios.post(
      "https://healthatlums-database.herokuapp.com/api/fetchDoctorID",
      {
        Doctor_ID: doctor_id,
      }
    )
      .then(() => {
        displayFetchedDoctor();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("in admin", count);
  return (
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

        <NavLink className="nav-link" to="/">
          <button>LogOut</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
