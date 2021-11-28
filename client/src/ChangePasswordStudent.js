import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./App.css";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Navigate } from "react-router-dom";

import passwordAtom from "./atoms/password";
import checkIDAtom from "./atoms/checkID";
import roleIDAtom from "./atoms/roleID";


function ChangePasswordStudent() {
  const [oldpassword, setoldPassword] = useState("");
  const [newpassword, setnewPassword] = useState("");
  const [checkpassword, setcheckPassword] = useState("");
  const [mover,setMover] = useState(0);

  const [password, setPassword] = useRecoilState(passwordAtom);
  const [check_id, setCheck_id] = useRecoilState(checkIDAtom);
  const [role_id, setRole_id] = useRecoilState(roleIDAtom);

  
  // ?? check if password atom is being updated or not
  const updatePassword = () => 
  {
    // first check if retyped password and new password are same or not
    if (checkpassword === newpassword)
    {
      // go to db to see if existing password is the same as the one entered here
      if (oldpassword === password) // password is global state carried from login through atom
      {
        
        // newpassword should not be the same as oldpassword
        if (newpassword !== oldpassword)
        {
          // send new entered password to DB to update the login and update the atom state's as well
          Axios.post("http://localhost:3001/api/updatePassword_student", { Check_ID: check_id, New_Password: newpassword })
          .then(() => {
            // updating password's atom state to the updated one
            setPassword(newpassword);
            setMover(1);
          })
          .catch((err) => {
            console.log("in error: ", err);
          });
        }
        else 
        {
          alert("Old Password and New Password Cannot Be the Same!");
        }
      }
      else
      {
        alert("Incorrect Existing Password Entered!");
      }
    }
    else
    {
      alert("New and Retyped Passwords Donot Match!");
    }
  }

  return (
    <div>
      { mover === 1 && role_id === 2 ? (
        <Navigate to="/homestudent" />
      ) : mover === 1 && role_id === 3 ? (
        <Navigate to="/homehw" />
      ) : mover === 0 && role_id === 2? (
        <div className="App">
          <div className="homepage">
            <h2>Change Password</h2>

            <label>Old Password</label>
            <input
              type="password"
              onChange={(e) => {
                setoldPassword(e.target.value);
              }}
            />

            <label>New Password</label>
            <input
              type="password"
              onChange={(e) => {
                setnewPassword(e.target.value);
              }}
            />

            <label>Retype New Password</label>
            <input
              type="password"
              onChange={(e) => {
                setcheckPassword(e.target.value);
              }}
            />

            <NavLink className="nav-link" to="/changepasswordstudent">
              <button onClick={updatePassword} >Change Password</button>
            </NavLink>

            <NavLink className="nav-link" to="/homestudent">
              <button>Back</button>
            </NavLink>
          </div>
        </div>
      ) : mover === 0 && role_id === 3? (
        <div className="App">
        <div className="homepage">
          <h2>Change Password</h2>

          <label>Old Password</label>
          <input
            type="password"
            onChange={(e) => {
              setoldPassword(e.target.value);
            }}
          />

          <label>New Password</label>
          <input
            type="password"
            onChange={(e) => {
              setnewPassword(e.target.value);
            }}
          />

          <label>Retype New Password</label>
          <input
            type="password"
            onChange={(e) => {
              setcheckPassword(e.target.value);
            }}
          />

          <NavLink className="nav-link" to="/changepasswordstudent">
            <button onClick={updatePassword} >Change Password</button>
          </NavLink>

          <NavLink className="nav-link" to="/homehw">
            <button>Back</button>
          </NavLink>
        </div>
      </div>
      ) : (<h2 Illegal Role_ID and Mover />)}
    </div>
  );
}

export default ChangePasswordStudent;