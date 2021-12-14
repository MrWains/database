import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";

import addressAtom from "./atoms/address";
import phoneNumAtom from "./atoms/phoneNum";
import roleIDAtom from "./atoms/roleID";

function ViewContactUs() {
  // state variables
  const [address, setAddress] = useRecoilState(addressAtom);
  const [phone_num, setPhone_Num] = useRecoilState(phoneNumAtom);
  const [role_id, setRole_id] = useRecoilState(roleIDAtom);

  return (
    <div>
        <div className="App">
        <div className="topbar"> Health@LUMS</div>
          <div className="homepage">
            <div className= "container">

            
            <h2>Contact Us</h2>

            <label>Address:</label>
            <label className = "label-black">{address}</label>

            <label>Phone Number:</label>
            <label className = "label-black">{phone_num}</label>
            
            { role_id === 2 ? (
              <NavLink className="nav-link" to="/homestudent">
                <button>Back</button>
              </NavLink>
            ) : role_id === 3 ? (
              <NavLink className="nav-link" to="/homehw">
                <button>Back</button>
              </NavLink>
            ) : (<h2 Illegal Role_ID />) }
          </div>
        </div>
        </div>
    </div>
  );
}

export default ViewContactUs;