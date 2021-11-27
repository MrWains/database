import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./App.css";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Navigate } from "react-router-dom";
import checkIDAtom from "./atoms/checkID";

function ComplaintSuggestion() {
  // state variables
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [ID, setID] = useState("");
  const [mover,setMover]=useState(0);

  const [check_id, setCheck_id] = useRecoilState(checkIDAtom);

  // generates SQL write query to add to feedback
  const submitComplain = () => 
  {
    Axios.post("http://localhost:3001/api/addComplaint_student", {Complain_ID: ID, Complain_Title: title, Complain_Description: description, User_ID: check_id})
    .then(() => {
      console.log("Complaint Submitted Successfully!");
      setMover(1);
    })
    .catch((err) => {
      console.log("Error in submitting complain: ", err);
      alert("Error In Submitting Complain");
    });

  }

  return (
    <div>
      {mover === 1 ? (
        <Navigate to="/homestudent" />
      ) :
      (
    <div className="App">
      <div className="homepage">
        <h2>Complaints / Suggestions</h2>

        <label>ID</label>
        <input
          type="text"
          onChange={(e) => {
            setID(e.target.value);
          }}
        />

        <label>Title *</label>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <label>Description</label>
        <input
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <NavLink className="nav-link" to="/complaintsuggestion">
          <button onClick={submitComplain}>Submit</button>
        </NavLink>

        <NavLink className="nav-link" to="/homestudent">
          <button>Back</button>
        </NavLink>
      </div>
    </div>)}
    </div>
  );
}

export default ComplaintSuggestion;