import React from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";

import addressAtom from "./atoms/address";
import phoneNumAtom from "./atoms/phoneNum";

function HomeStudent() {
  // state variables
  const [address, setAddress] = useRecoilState(addressAtom);
  const [phone_num, setPhone_Num] = useRecoilState(phoneNumAtom);

  // listen to the response of fetch query and set aomic states accordingly to be passes
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

  return (
    <div className="App">
      <div className="student_homepage">
        <h2>Student Home Page</h2>

        <NavLink className="nav-link" to="/viewprofilestudent">
          <button>View Personal Profile</button>
        </NavLink>

        <NavLink className="nav-link" to="/viewdoctorslist">
          <button>View Doctors List</button>
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
          <button onClick={fetchContactUs}>View Contact Us</button>
        </NavLink>

        <NavLink className="nav-link" to="/">
          <button>LogOut</button>
        </NavLink>
      </div>
    </div>
  );
}

export default HomeStudent;
