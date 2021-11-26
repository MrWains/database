import React from "react";
// import { useState } from "react";
import { NavLink } from "react-router-dom";

function HomeStudent() {
  // state variables

  return (
    <div className="App">
      <div className="student_homepage">
        <h2>Student Home Page</h2>

        <NavLink className="nav-link" to="/viewprofilestudent">
          <button>View Personal Profile</button>
        </NavLink>

        <NavLink className="nav-link" to="/updateemergency">
          <button>Update Emergency Contact</button>
        </NavLink>

        <NavLink className="nav-link" to="/updatemedicalprofile">
          <button>Update Medical Profile</button>
        </NavLink>

        <NavLink className="nav-link" to="/changepasswordstudent">
          <button>Change Password</button>
        </NavLink>

        <NavLink className="nav-link" to="/complaintsuggestion">
          <button>Add Complain/Suggestion</button>
        </NavLink>

        <NavLink className="nav-link" to="/viewcontactus">
          <button>View Contact Us</button>
        </NavLink>

        <NavLink className="nav-link" to="/">
          <button>LogOut</button>
        </NavLink>
      </div>
    </div>
  );
}

export default HomeStudent;
