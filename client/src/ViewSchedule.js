import React from "react";
import { useState } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { useRecoilState } from "recoil";
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, ViewsDirective, ViewDirective} from '@syncfusion/ej2-react-schedule';


function ViewSchedule() {

    // state variables
    const [counter, setCounter] = useState(0);
    const [ID, setID] = useState(null);
    const [subject, setSubject] = useState("");
    const [startYear, setstartYear] = useState(0);
    const [startMonth, setstartMonth] = useState(0);
    const [startDate, setstartDate] = useState(0);
    const [startHours, setstartHours] = useState(0);
    const [startMinutes, setstartMinutes] = useState(0);
    const [endYear, setendYear] = useState(0);
    const [endMonth, setendMonth] = useState(0);
    const [endDate, setendDate] = useState(0);
    const [endHours, setendHours] = useState(0);
    const [endMinutes, setendMinutes] = useState(0);
    const [isAllDay, setisAllDay] = useState(false);
  
  
    const updateDoctorSchedule = () => {
      Axios.get("http://localhost:3001/api/senddoctorSchedule")
      .then(function (response) {
        setID(response.data.iddoctor_schedule);
        setSubject(response.data.subject); //year month date hours minutes
        setstartYear(response.data.start_year);
        setstartMonth(response.data.start_month);
        setstartDate(response.data.start_date);
        setstartHours(response.data.start_hours);
        setstartMinutes(response.data.start_minutes);
        setendYear(response.data.end_year);
        setendMonth(response.data.end_month);
        setendDate(response.data.end_date);
        setendHours(response.data.end_hours);
        setendMinutes(response.data.end_minutes);
        setisAllDay(response.data.is_all_day);
      });
    };
  
    // makes call to backend to execute fetch query
    const fetchSchedule = () => {
      // send fetch query
      Axios.post("http://localhost:3001/api/doctorSchedule")
        .then(() => {
          updateDoctorSchedule();
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (counter === 0) {
      fetchSchedule();
      setCounter(1);
    }
    
    const scheduleData = [{
      Id: ID,
      Subject: subject,
      StartTime: new Date(startYear, startMonth, startDate, startHours, startMinutes),
      EndTime: new Date(endYear, endMonth, endDate, endHours, endMinutes),
      IsAllDay: isAllDay
    }, {
      Id: 4,
      Subject: 'Vacation',
      StartTime: new Date(2021, 11, 13, 9, 0),
      EndTime: new Date(2021, 11, 13, 10, 0),
      IsAllDay: false
    }];


  // const scheduleData = [{
  //   Id: ID,
  //   Subject: subject,
  //   StartTime: new Date(startYear, startMonth, startDate, startHours, startMinutes),
  //   EndTime: new Date(endYear, endMonth, endDate, endHours, endMinutes),
  //   IsAllDay: isAllDay
  // }, {
  //   Id: 4,
  //   Subject: 'Vacation',
  //   StartTime: new Date(2021, 11, 13, 9, 0),
  //   EndTime: new Date(2021, 11, 13, 10, 0),
  //   IsAllDay: false
  // }];

  return (
    <div>
      <div className="App">
        <div className="homepage">
          <h2>View Schedule</h2>

          
          <ScheduleComponent currentView='Month' eventSettings={{dataSource: scheduleData}}>
            <ViewsDirective>
                <ViewDirective option='Week'/>
                <ViewDirective option='Month'/>
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month]}/>
          </ScheduleComponent>
          
          <NavLink className="nav-link" to="/home">
            <button>Back</button>
          </NavLink>
        
        </div>
      </div>
    </div>
  );
}

export default ViewSchedule;