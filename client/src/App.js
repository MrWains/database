import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import ReactDOM from "react-dom";
import "./index.css";
import { MemoryRouter, Route, Routes } from "react-router-dom";

// import {
//   Home,
//   Login
// } from ".\components";

import Home from "./Home";
import Login from "./Login";
import { Home_HW, Home_Student, Add_Student, Add_Doctor } from ".";

export default () => (
  <MemoryRouter>
    <Routes>
      <Route exact path="/" element={<LogIn />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/homestudent" element={<Home_Student />} />
      <Route exact path="/homehw" element={<Home_HW />} />
      <Route exact path="/addstudent" element={<Add_Student />} />
      <Route exact path="/adddoctor" element={<Add_Doctor />} />
    </Routes>
  </MemoryRouter>
);
