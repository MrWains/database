import { useState } from "react";
import Axios from "axios";
import Admin from "./admin";
import Student from "./student";
import Health from "./health";

const LogIn = () => {
  const [check_id, setCheck_id] = useState("");
  const [password, setPassword] = useState("");
  const [responseData, setResponseData] = useState(0);

  const logInStatus = () => {
    Axios.get("http://localhost:3001/api/send").then(function (response) {
      if (response.data === 1) {
        setResponseData(1);
      } else if (response.data === 2) {
        setResponseData(2);
      } else if (response.data === 3) {
        setResponseData(3);
      } else {
        alert("Invalid Login Information!");
      }
    });
  };

  const logIn = () => {
    Axios.post("http://localhost:3001/api/checkRole_id", {
      Check_ID: check_id,
      Password: password,
    })
      .then(() => {
        console.log("inside logIn");
        logInStatus();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      {responseData === 1 ? (
        Admin()
      ) : responseData === 2 ? (
        Student()
      ) : responseData === 3 ? (
        Health()
      ) : (
        <div className="login-homepage">
          <h2>LOGIN HOMEPAGE</h2>
          <label>ID</label>
          <input
            type="text"
            name="check_ID"
            onChange={(e) => {
              setCheck_id(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="text"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button onClick={logIn}>Log In</button>
        </div>
      )}
    </div>
  );
};

export default LogIn;
