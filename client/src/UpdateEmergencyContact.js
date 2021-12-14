import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { useRecoilState } from "recoil";

import emergencyContactAtom from "./atoms/emergencyContact";
import emergencyFirstNameAtom from "./atoms/emergencyfirstname";
import emergencyLastNameAtom from "./atoms/emergencylastname";
import checkIDAtom from "./atoms/checkID";

function EditEmergencyContact() {
  // state variables
  const [check_id, setCheck_id] = useRecoilState(checkIDAtom);
  const [emergencyContact, setEmergencyContact] = useRecoilState(emergencyContactAtom);
  const [emergencyFirstName, setEmergencyFirstName] = useRecoilState(emergencyFirstNameAtom);
  const [emergencyLastName, setEmergencyLastName] = useRecoilState(emergencyLastNameAtom);
  
  // gets called every time on back with saving to send update query to DB
  const setEmergencyContactInfo = () => 
  {
    // send update query to DB
    Axios.post("http://localhost:3001/api/updateemergency", {First_Name: emergencyFirstName, Last_Name: emergencyLastName, Contact_Num: emergencyContact, Student_ID: check_id})
    .catch((err) => 
    {
      console.log(err)
    });
  };

  return (
    <div>
      <div className="App">
        <div className="homepage">
        <div className="topbar"> Health@LUMS</div>
          <div className = "container">
          <h2>Edit Emergency Contact Information</h2>

            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              value={emergencyFirstName}
              onChange={(e) => {
                setEmergencyFirstName(e.target.value);
              }}
            />
          
          
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              value={emergencyLastName}
              onChange={(e) => {
                setEmergencyLastName(e.target.value);
              }}
            />
    

            <label>Contact Number</label>
            <input
              type="text"
              name="contact"
              value={emergencyContact}
              onChange={(e) => {
                setEmergencyContact(e.target.value);
              }}
            />
      

          <NavLink className="nav-link" to="/homestudent">
            <button>Back Without Updating</button>
          </NavLink>

          <NavLink className="nav-link" to="/homestudent">
            <button onClick={setEmergencyContactInfo}>Update and Go Back</button>
          </NavLink>
        
        </div>
      </div>
      </div>
    </div>
  );
}

export default EditEmergencyContact;