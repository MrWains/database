// import React from "react";
// import { useState, useEffect } from "react";
// import Axios from "axios";
import "./App.css";
// import ReactDOM from "react-dom";
import "./index.css";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import {
  Home,
  Login,
  HomeHW,
  HomeStudent,
  AddStudent,
  AddDoctor,
  ComplaintSuggestion,
  ViewContactUs,
  UpdateEmergencyContact,
  UpdateMedicalProfile,
  ViewDoctorsList,
  ViewProfileStudent,
  ChangePasswordStudent,
} from ".";

const App = () => {
  return (
    <RecoilRoot>
      <MemoryRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/homestudent" element={<HomeStudent />} />
          <Route exact path="/homehw" element={<HomeHW />} />
          <Route exact path="/addstudent" element={<AddStudent />} />
          <Route exact path="/adddoctor" element={<AddDoctor />} />
          <Route
            exact
            path="/complaintsuggestion"
            element={<ComplaintSuggestion />}
          />
          <Route exact path="/viewcontactus" element={<ViewContactUs />} />
          <Route
            exact
            path="/updateemergency"
            element={<UpdateEmergencyContact />}
          />
          <Route
            exact
            path="/updatemedicalprofile"
            element={<UpdateMedicalProfile />}
          />
          <Route exact path="/viewdoctorslist" element={<ViewDoctorsList />} />
          <Route
            exact
            path="/viewprofilestudent"
            element={<ViewProfileStudent />}
          />
          <Route
            exact
            path="/changepasswordstudent"
            element={<ChangePasswordStudent />}
          />
        </Routes>
      </MemoryRouter>
    </RecoilRoot>
  );
};
export default App;
