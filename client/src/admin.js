// import React from "react";
// import { useState, useEffect } from "react";
// import Axios from "axios";

import { useState } from "react";

const Admin = () => 
{
    const [student_id, setStudent_id] = useState(""); 
    const [doctor_id, setDoctor_id] = useState(""); 
    console.log("in Admin")
    
    
    // return (
    //     <div className="admin-homepage">
    //         <h1> ADMIN HOMEPAGE </h1>
    //     </div>
    // )

    return (
        <div className="waow">
          
          <div className = "admin-homepage">
            <h2>Admin Home Page</h2>
    
            <button>Add a student</button>
            <button>Add a doctor</button>
    
            <div className = "admin-homepage-search">
              <label>Student ID</label>
              <input type="text" name="add-studentid" onChange={(e) => { setStudent_id(e.target.value); }}/>
    
              <button>View Information</button>
            </div>
    
            <div className = "admin-homepage-search">
              <label>Doctor ID</label>
              <input type="text" name="add-doctorid" onChange={(e) => { setDoctor_id(e.target.value); }}/>
    
              <button>View Information</button>
            </div>
    
          </div>
        </div>
      );
};

export default Admin;