import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { useRecoilState } from "recoil";

import addressAtom from "./atoms/address";
import phoneNumAtom from "./atoms/phoneNum";

function ViewContactUs() {
  // state variables
  const [address, setAddress] = useRecoilState(addressAtom);
  const [phone_num, setPhone_Num] = useRecoilState(phoneNumAtom);

  
  // gets called every time on back with saving to send update query to DB
  const setContactInfo = () => 
  {
    // send update query to DB
    Axios.post("http://localhost:3001/api/editcontactus", {Address: address, Phone_Num: phone_num})
    .catch((err) => 
    {
      console.log(err)
    });
  };

  return (
    <div>
      <div className="App">
      <div className="topbar"> Health@LUMS</div>
        <div className="homepage">
          <div className = "container"> 
          <h2>Edit Contact Us</h2>

            <label>Address</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
      
  
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNum"
              value={phone_num}
              onChange={(e) => {
                setPhone_Num(e.target.value);
              }}
            />
        

          <NavLink className="nav-link" to="/home">
            <button>Back Without Updating</button>
          </NavLink>

          <NavLink className="nav-link" to="/home">
            <button onClick={setContactInfo}>Update and Go Back</button>
          </NavLink>
        
        </div>
        </div>
      </div>
    </div>
  );
}

export default ViewContactUs;