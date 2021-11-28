import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { default as Login } from "./Login";
export { default as Home } from "./Home";
export { default as HomeStudent } from "./HomeStudent";
export { default as HomeHW } from "./HomeHW";
export { default as AddStudent } from "./AddStudent";
export { default as AddDoctor } from "./AddDoctor";
export { default as ChangePasswordStudent } from "./ChangePasswordStudent";
export { default as ComplaintSuggestion } from "./ComplaintSuggestion";
export { default as UpdateEmergencyContact } from "./UpdateEmergencyContact";
export { default as ViewContactUs } from "./ViewContactUs";
export { default as ViewDoctorsList } from "./ViewDoctorsList";
export { default as ViewProfileStudent } from "./ViewProfileStudent";
export { default as ViewProfileDoctor } from "./ViewProfileDoctor";
export { default as ViewComplaintsSuggestions } from "./ViewComplaintsSuggestions";
export { default as EditContactUs } from "./EditContactUs";
export { default as ViewStudentInformation } from "./ViewStudentInformation";
export { default as ViewDoctorInformation } from "./ViewDoctorInformation";
export { default as EditPersonalProfile } from "./EditPersonalProfile";
