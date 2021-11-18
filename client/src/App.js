import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import {
//   Home,
//   Login
// } from ".\components";

import Home from "./Home";
import Login from "./Login";
import { Home_HW, Home_Student, Add_Student, Add_Doctor } from ".";

function App() {

  return(
    <div className="App">
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/homestudent" element={<Home_Student/>} />
      <Route path="/homehw" element={<Home_HW/>} />
      <Route path="/addstudent" element={<Add_Student/>} />
      <Route path="/adddoctor" element={<Add_Doctor/>} />
    </Routes>
  </Router>
  </div>
  );

  
}

export default App;