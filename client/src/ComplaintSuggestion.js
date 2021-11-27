import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./App.css";
import { NavLink } from "react-router-dom";

function ComplaintSuggestion() {

  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [ID, setID] = useState("");

  return (
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
          <button>Submit</button>
        </NavLink>

        <NavLink className="nav-link" to="/homestudent">
          <button>Back</button>
        </NavLink>
      </div>
    </div>
  );
}
export default ComplaintSuggestion;