import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  // state variables
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const logIn = () => {
    Axios.post("https://healthatlums-database.herokuapp.com/api/insert", {
      ID: id,
      Name: name,
    }).then(() => {
      alert("Sucessful Insert!");
    });
  };

  return (
    <div className="App">
      <h2>Log In</h2>

      <label>ID</label>
      <input
        type="text"
        name="ID"
        onChange={(e) => {
          setId(e.target.value);
        }}
      ></input>
      <label>name</label>
      <input
        type="text"
        name="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>

      <button onClick={logIn()}></button>
    </div>
  );
}

export default App;
