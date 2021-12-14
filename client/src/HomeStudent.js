import React from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";

import addressAtom from "./atoms/address";
import phoneNumAtom from "./atoms/phoneNum";
import emergencyContactAtom from "./atoms/emergencyContact";
import emergencyFirstNameAtom from "./atoms/emergencyfirstname";
import emergencyLastNameAtom from "./atoms/emergencylastname";
import checkIDAtom from "./atoms/checkID";


function HomeStudent() {
  // state variables
  const [check_id, setCheck_id] = useRecoilState(checkIDAtom);
  const [address, setAddress] = useRecoilState(addressAtom);
  const [phone_num, setPhone_Num] = useRecoilState(phoneNumAtom);
  const [emergencyContact, setEmergencyContact] = useRecoilState(emergencyContactAtom);
  const [emergencyFirstName, setEmergencyFirstName] = useRecoilState(emergencyFirstNameAtom);
  const [emergencyLastName, setEmergencyLastName] = useRecoilState(emergencyLastNameAtom);

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

  const updateEmergency = () => 
  {
    Axios.get("http://localhost:3001/api/sendemergency")
    .then( function(response) {
      // set global states for printing
      setEmergencyContact(response.data.emergency_contact_number);
      setEmergencyFirstName(response.data.emergency_contact_first_name);
      setEmergencyLastName(response.data.emergency_contact_last_name);
    });
  }

  // makes call to backend to execute fetch query for emergency contact's information
  const fetchEmergency = () => 
  {
    // send fetch query
    Axios.post("http://localhost:3001/api/fetchemergency", {Check_ID: check_id})
      .then(() => {
        updateEmergency();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <div className="student_homepage">
        <div className = "container">

        <h2>Student Home Page</h2>

        <NavLink className="nav-link" to="/viewprofilestudent">
          <button className = "button-left" >View Personal Profile</button>
        </NavLink>

        <NavLink className="nav-link" to="/viewdoctorslist">
          <button className = "button-right" >View Doctors List</button>
        </NavLink>

        <NavLink className="nav-link" to="/updateemergency">
          <button className = "button-left" onClick={fetchEmergency} >Update Emergency Contact</button>
        </NavLink>

        <NavLink className="nav-link" to="/changepasswordstudent">
          <button className = "button-right">Change Password</button>
        </NavLink>

        <NavLink className="nav-link" to="/complaintsuggestion">
          <button className = "button-left" >Add Complaint/Suggestion</button>
        </NavLink>

        <NavLink className="nav-link" to="/viewcontactus">
          <button  className = "button-right" onClick={fetchContactUs}>View Contact Us</button>
        </NavLink>

        <NavLink className="nav-link" to="/">
          <button className = "button-left" >LogOut</button>
        </NavLink>
      </div>
      </div>
    </div>
  );
}

export default HomeStudent;
