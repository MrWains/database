import "./App.css";
import "./index.css";
import React from "react";
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
  ViewComplaintsSuggestions,
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
          <Route
            exact
            path="/viewcomplaintssuggestions"
            element={<ViewComplaintsSuggestions />}
          />
        </Routes>
      </MemoryRouter>
    </RecoilRoot>
  );
};
export default App;
