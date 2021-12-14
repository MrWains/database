import React from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";

import addressAtom from "./atoms/address";
import phoneNumAtom from "./atoms/phoneNum";
import checkIDAtom from "./atoms/checkID";
import firstNameDoctorAtom from "./atoms/firstNameDoctor"
import middleNameDoctorAtom from "./atoms/middleNameDoctor"
import lastNameDoctorAtom from "./atoms/lastNameDoctor"
import specializationDoctorAtom from "./atoms/specializationDoctor"
import daysDoctorAtom from "./atoms/daysDoctor"
import starthourDoctorAtom from "./atoms/starthourDoctor"
import startminuteDoctorAtom from "./atoms/startminuteDoctor"
import endhourDoctorAtom from "./atoms/endhourDoctor"
import endminuteDoctorAtom from "./atoms/endminuteDoctor"

function HomeStudent() {
  // state variables
  const [check_id, setCheck_id] = useRecoilState(checkIDAtom);
  const [address, setAddress] = useRecoilState(addressAtom);
  const [phone_num, setPhone_Num] = useRecoilState(phoneNumAtom);
  const [firstNameDoctor, setFirstNameDoctor] = useRecoilState(firstNameDoctorAtom);
  const [middleNameDoctor, setMiddleNameDoctor] = useRecoilState(middleNameDoctorAtom);
  const [lastNameDoctor, setLastNameDoctor] = useRecoilState(lastNameDoctorAtom);
  const [specializationDoctor, setSpecializationDoctor] = useRecoilState(specializationDoctorAtom);
  const [daysDoctor, setdaysDoctor] = useRecoilState(daysDoctorAtom);
  const [starthourDoctor, setstarthourDoctor] = useRecoilState(starthourDoctorAtom);
  const [startminuteDoctor, setstartminuteDoctor] = useRecoilState(startminuteDoctorAtom);
  const [endhourDoctor, setendhourDoctor] = useRecoilState(endhourDoctorAtom);
  const [endminuteDoctor, setendminuteDoctor] = useRecoilState(endminuteDoctorAtom);
  
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

  const profilecollector = () => {
    Axios.post("http://localhost:3001/api/fetchDoctorID", {
      Doctor_ID: check_id,
    })
    .then(() => {
      Axios.get("http://localhost:3001/api/fetchDoctorID")
      .then(function (response) {

        console.log(response.data);

        setFirstNameDoctor(response.data.first_name);
        setMiddleNameDoctor(response.data.middle_name);
        setLastNameDoctor(response.data.last_name);
        setSpecializationDoctor(response.data.specialization);
      })
      .catch((err) => {
        console.log(err);
      });
    });
  };

  const schedulecollector = () => {
    Axios.post("http://localhost:3001/api/fetchDoctorSchedule", {
      Doctor_ID: check_id,
    })
    .then(() => {
      Axios.get("http://localhost:3001/api/fetchDoctorSchedule")
      .then(function (response) {

        console.log(response.data);

        setdaysDoctor(response.data.days);
        setstarthourDoctor(response.data.start_hour);
        setstartminuteDoctor(response.data.start_minute);
        setendhourDoctor(response.data.end_hour);
        setendminuteDoctor(response.data.end_minute);
      })
      .catch((err) => {
        console.log(err);
      });
    });
  };


  return (
    <div>
    <div className="App">
      <div className="homepage">
        <h2>Health Worker Home Page</h2>

        <NavLink className="nav-link" to="/viewprofiledoctor">
          <button>View Personal Profile</button>
        </NavLink>

        <NavLink className="nav-link" to="/editpersonalprofile">
          <button onClick={profilecollector}>Edit Profile</button>
        </NavLink>

        <NavLink className="nav-link" to="/viewdoctorsschedule">
          <button>View Doctor Schedule</button>
        </NavLink>

        <NavLink className="nav-link" to="/editpersonalschedule">
          <button onClick={schedulecollector}>Edit Schedule</button>
        </NavLink>

        <NavLink className="nav-link" to="/changepasswordstudent">
          <button>Change Password</button>
        </NavLink>

        <NavLink className="nav-link" to="/viewcontactus">
          <button onClick={fetchContactUs}>View Contact Us</button>
        </NavLink>

        <NavLink className="nav-link" to="/complaintsuggestion">
          <button>Add Complain/Suggestion</button>
        </NavLink>
        
        <NavLink className="nav-link" to="/">
          <button>LogOut</button>
        </NavLink>
      </div>
    </div>
    </div>
  );
}

export default HomeStudent;
