import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";

import addressAtom from "./atoms/address";
import phoneNumAtom from "./atoms/phoneNum";

function ViewContactUs() {
  // state variables
  const [address, setAddress] = useRecoilState(addressAtom);
  const [phone_num, setPhone_Num] = useRecoilState(phoneNumAtom);


  return (
    <div>
      <div className="App">
        <div className="homepage">
          <h2>Contact Us</h2>

          <label>Address:</label>
          <label>{address}</label>

          <label>Phone Number:</label>
          <label>{phone_num}</label>

          <NavLink className="nav-link" to="/homestudent">
            <button>Back</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default ViewContactUs;