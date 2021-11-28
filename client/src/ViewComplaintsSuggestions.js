import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./App.css";
import { NavLink } from "react-router-dom";

function ViewComplaintsSuggestions() {
  // listen to the response of fetch query and set aomic states accordingly to be passes
  const [array, setArray] = useState("");
  const [counter, setCounter] = useState(0);

  const listmaker = (list) => {
    const arr = [];
    for (let i = 0, len = list.length; i < len; i++) {
      arr.push(
        <div>
          <h3>Complaint/Suggestion #{i + 1}</h3>
          <label>Title:</label>
          <div>{list[i].title}</div>
          <label>Description:</label>
          <div>{list[i].description}</div>
          <label>UserID of Submitter:</label>
          <div>{list[i].user_id}</div>
        </div>
      );
    }
    setArray(arr);
  };

  const updateComplaintSuggestions = () => {
    Axios.get("http://localhost:3001/api/sendComplaintSuggestions").then(
      function (response) {
        listmaker(response.data);
      }
    );
  };

  // makes call to backend to execute fetch query
  const fetchComplaintSuggestions = () => {
    // send fetch query
    Axios.post("http://localhost:3001/api/complaintsuggestions")
      .then(() => {
        updateComplaintSuggestions();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (counter === 0) {
    fetchComplaintSuggestions();
    setCounter(1);
  }

  return (
    <div className="App">
      <div className="homepage">
        <h2>Complaints/Suggestions</h2>
        <div>{array}</div>
        <NavLink className="nav-link" to="/home">
          <button>Back</button>
        </NavLink>
      </div>
    </div>
  );
}
export default ViewComplaintsSuggestions;
