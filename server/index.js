const express = require("express");
const app = express();
app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require("cors");
app.use(cors());
const mysql = require("mysql");
const PORT = 3001;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  // database: "localSchema",
  database: "dummyData",
});

// heroku setup
// mysql://ba41ba76295c24:421b299c@eu-cdbr-west-01.cleardb.com/heroku_26c145cc8987357?reconnect=true
// const db = mysql.createPool({
//   host: "eu-cdbr-west-01.cleardb.com",
//   user: "ba41ba76295c24",
//   password: "421b299c",
//   database: "heroku_26c145cc8987357",
// });

let toReturn = ""; // for fetching role_id for login
let forReturn = ""; // for fetching student for admin
let willReturn = ""; // for fetching doctor for admin
let shouldReturn = ""; // for fetching contact us
let mustReturn = ""; // for fetching doctor list
let wouldReturn = ""; // for fetching complaints/suggestions
let mayReturn = ""; // for fetching emergency contact's information
let canReturn = ""; // for fetching doctor schedule

// server status checker
app.get("/", (req, res) => {
  res.send("Yay!! this works");
});

app.post("/api/addstudent", (req, res) => {
  const receivedFN = req.body.firstName;
  const receivedMN = req.body.middleName;
  const receivedLN = req.body.lastName;
  const receivedBatch = req.body.batch;
  const receivedRollNumber = req.body.rollNumber;
  const receivedcontact = req.body.contactNumber;
  const receivedemergency = req.body.emergency;
  const receivedID = req.body.role_id;
  const receivedemergencyFName = req.body.emergencyFName;
  const receivedemergencyLName = req.body.emergencyLName;
  const receivedPassword = req.body.password;

  // see role_id against check_id to determine table to check
  const sqlInsert =
    "INSERT INTO student VALUES (? , ? , ? , ? , ? , ? , ? , ? , ? , ?);";
  db.query(
    sqlInsert,
    [
      receivedRollNumber,
      receivedID,
      receivedFN,
      receivedMN,
      receivedLN,
      receivedBatch,
      receivedcontact,
      receivedemergencyFName,
      receivedemergencyLName,
      receivedemergency
    ],
    (err, result) => {
      res.send("success");
    }
  );
  const sqlAddAccount = "INSERT INTO login VALUES (?,?,?);";
  db.query(
    sqlAddAccount,
    [receivedRollNumber, receivedPassword, receivedID],
    (err, result) => {
      console.log("err", err);
      console.log("DONE", result);
    }
  );
});

app.post("/api/adddoctor", (req, res) => {
  const receivedFN = req.body.firstName;
  const receivedMN = req.body.middleName;
  const receivedLN = req.body.lastName;
  const receivedworkerID = req.body.workerID;
  const receivedID = req.body.role_id;
  const receivedspecialization = req.body.specialziation;
  const receivedPassword = req.body.password;

  // see role_id against check_id to determine table to check
  const sqlInsert =
    "INSERT INTO healthcare_worker VALUES (? , ? , ? , ? , ? , ?) ;";
  db.query(
    sqlInsert,
    [
      receivedworkerID,
      receivedID,
      receivedFN,
      receivedMN,
      receivedLN,
      receivedspecialization
    ],
    (err, result) => {
      res.send("successfully");
    }
  );

  const sqlAddAccount = "INSERT INTO login VALUES (?,?,?);";
  db.query(
    sqlAddAccount,
    [receivedworkerID,  receivedPassword, receivedID],
    (err, result) => {
      console.log("err", err);
      console.log("DONE", result);
    }
  );
});

// Login Handler
app.post("/api/checkRole_id", (req, res) => {
  const receivedCheck_Id = req.body.Check_ID;
  const receivedPassword = req.body.Password;

  // see role_id against check_id to determine table to check
  const sqlFetch = "SELECT role_id FROM login WHERE check_id=? AND password=?;";
  db.query(sqlFetch, [receivedCheck_Id, receivedPassword], (err, result) => {
    if (err || result.length === 0) {
      toReturn = "Invalid Login Information";
      res.send(toReturn);
    } else {
      // correct login info, return role_id for page display
      toReturn = JSON.stringify(result[0].role_id);
      res.send(toReturn);
    }
  });
});

// Login sender
app.post("/api/checkRole_id", (req, res) => {
  const receivedCheck_Id = req.body.Check_ID;
  const receivedPassword = req.body.Password;

  // see role_id against check_id to determine table to check
  const sqlFetch = "SELECT role_id FROM login WHERE check_id=? AND password=?;";
  db.query(sqlFetch, [receivedCheck_Id, receivedPassword], (err, result) => {
    if (err || result.length === 0) {
      toReturn = "Invalid Login Information";
      res.send(toReturn);
    } else {
      // correct login info, return role_id for page display
      toReturn = JSON.stringify(result[0].role_id);
      res.send(toReturn);
    }
  });
});

app.get("/api/send", (req, res) => {
  if (toReturn != "") {
    res.send(toReturn);
  }
});

app.post("/api/fetchStudentID", (req, res) => {
  const receivedStudent_Id = req.body.Student_ID;

  // fetch student against the given ID
  const sqlFetch = "SELECT * FROM student WHERE idstudent=?;";
  db.query(sqlFetch, [receivedStudent_Id], (err, result) => {
    if (err || result.length === 0) {
      forReturn = "Invalid Student ID Entered!";
      res.send(forReturn);
    } else {
      forReturn = JSON.stringify(result[0]);
      res.send(forReturn);
    }
  });
});

app.get("/api/fetchStudentID", (req, res) => {
  if (forReturn != "") {
    res.send(forReturn);
  }
});

app.post("/api/fetchDoctorID", (req, res) => {
  const receivedDoctor_Id = req.body.Doctor_ID;

  // fetch doctor against the given ID
  const sqlFetch =
    "SELECT * FROM healthcare_worker WHERE idhealthcare_worker=?;";
  db.query(sqlFetch, [receivedDoctor_Id], (err, result) => {
    if (err || result.length === 0) {
      willReturn = "Invalid Doctor ID Entered!";
      res.send(willReturn);
    } else {
      willReturn = JSON.stringify(result[0]);
      res.send(willReturn);
    }
  });
});

app.get("/api/fetchDoctorID", (req, res) => {
  if (willReturn != "") {
    res.send(willReturn);
  }
});

// update student's password
app.post("/api/updatePassword_student", (req, res) => {
  const receivedCheck_Id = req.body.Check_ID;
  const receivedNewPassword = req.body.New_Password;

  const sqlUpdate = "UPDATE login SET password=? WHERE check_id=?;";
  db.query(
    sqlUpdate,
    [receivedNewPassword, receivedCheck_Id],
    (err, result) => {
      toReturn = "Update Query Run";
      res.send(toReturn);
    }
  );
});

// contact us
app.post("/api/contactus", (req, res) => {
  const sqlFetch = "SELECT address, phone_num FROM contact_us";
  db.query(sqlFetch, (err, result) => {
    if (err || result.length === 0) {
      toReturn = "Query Failed to Execute!";
      res.send(toReturn);
    } else {
      shouldReturn = result[0];
      res.send(shouldReturn);
    }
  });
});

// contact us sender
app.get("/api/sendContactUs", (req, res) => {
  if (shouldReturn != "") {
    res.send(shouldReturn);
  }
});

// doctor list
app.post("/api/doctorslist", (req, res) => {
  const sqlFetch =
    "SELECT first_name,middle_name,last_name,specialization FROM healthcare_worker";
  db.query(sqlFetch, (err, result) => {
    if (err || result.length === 0) {
      toReturn = "Query Failed to Execute!";
      res.send(toReturn);
    } else {
      mustReturn = result;
      res.send(mustReturn);
    }
  });
});

// doctor list sender
app.get("/api/sendDoctorsList", (req, res) => {
  if (mustReturn != "") {
    res.send(mustReturn);
  }
});

// Complaints/Suggestions
app.post("/api/complaintsuggestions", (req, res) => {
  const sqlFetch = "SELECT title,description,user_id FROM feedback";
  db.query(sqlFetch, (err, result) => {
    if (err || result.length === 0) {
      toReturn = "Query Failed to Execute!";
      res.send(toReturn);
    } else {
      wouldReturn = result;
      res.send(wouldReturn);
    }
  });
});

// Complaints/Suggestions sender
app.get("/api/sendComplaintSuggestions", (req, res) => {
  if (wouldReturn != "") {
    res.send(wouldReturn);
  }
});

// add student's complain to feedback
app.post("/api/addComplaint_student", (req, res) => {
  const receivedID = req.body.Complain_ID;
  const receivedTitle = req.body.Complain_Title;
  const receivedDescription = req.body.Complain_Description;
  const receivedUID = req.body.User_ID;

  const sqlInsert =
    "INSERT INTO feedback (idfeedback, title, description, user_id) VALUES (?,?,?,?);";
  db.query(
    sqlInsert,
    [receivedID, receivedTitle, receivedDescription, receivedUID],
    (err, result) => {
      toReturn = "Update Query Run";
      res.send(toReturn);
    }
  );
});

// update contact us information
app.post("/api/editcontactus", (req, res) => {
  const receivedAddress = req.body.Address;
  const receivedPhone_Num = req.body.Phone_Num;

  const sqlUpdate = "UPDATE contact_us SET address=?, phone_num=? WHERE contact_id=1;";
  db.query(sqlUpdate, [receivedAddress, receivedPhone_Num], (err, result) => {
      toReturn = "Update Query Run";
      res.send(toReturn);
    }
  );
});

// fetch emergency contact information
app.post("/api/fetchemergency", (req, res) => {
  const receivedStudentID = req.body.Check_ID;

  const sqlFetch = "SELECT emergency_contact_first_name, emergency_contact_last_name, emergency_contact_number FROM student WHERE idstudent=?;"
  db.query(sqlFetch, [receivedStudentID], (err, result) => {

    if (err || result.length === 0) {
      mayReturn = "Query Failed to Execute!";
      res.send(mayReturn);
    } else {
      mayReturn = JSON.stringify(result[0]);
      res.send(mayReturn);
    }
  });
});

//emergency contact information sender
app.get("/api/sendemergency", (req, res) => {
  if (mayReturn != "") {
    res.send(mayReturn);
  }
});

// update emergency contact information
app.post("/api/updateemergency", (req, res) => {
  const receivedFirstName = req.body.First_Name;
  const receivedLastName = req.body.Last_Name;
  const receivedContact_Num = req.body.Contact_Num;
  const receivedStudent_Id = req.body.Student_ID;

  const sqlUpdate = "UPDATE student SET emergency_contact_first_name=?, emergency_contact_last_name=?, emergency_contact_number=? WHERE idstudent=?;";
  db.query(sqlUpdate, [receivedFirstName, receivedLastName, receivedContact_Num, receivedStudent_Id], (err, result) => {
      toReturn = "Update Query Run";
      res.send(toReturn);
    }
  );
});

// update doctor's profile information
app.post("/api/updatedoctorprofile", (req, res) => {
  const receivedFirstName = req.body.firstName;
  const receivedMiddleName = req.body.middleName;
  const receivedLastName = req.body.lastName;
  const receivedspecialization = req.body.specialziation;
  const receivedHW_ID = req.body.Check_ID;

  console.log("hereeee: ", receivedFirstName, receivedMiddleName, receivedLastName, receivedspecialization, receivedHW_ID);

  const sqlUpdate = "UPDATE healthcare_worker SET first_name=?, middle_name=?, last_name=?, specialization=? WHERE idhealthcare_worker=?;";
  db.query(sqlUpdate, [receivedFirstName, receivedMiddleName, receivedLastName, receivedspecialization, receivedHW_ID], (err, result) => {
      toReturn = "Update Query Run";
      res.send(toReturn);
    }
  );
});

// View Schedule
app.post("/api/doctorSchedule", (req, res) => {
  //const sqlFetch = "SELECT iddoctor_schedule, subject, start_year, start_month, start_date, start_hours, start_minutes, end_year, end_month, end_date, end_hours, end_minutes, is_all_day FROM doctor_schedule";
  const sqlFetch = "SELECT iddoctors_schedule, hid, day, start_hour, start_minute, end_hour, end_minute FROM doctors_schedule";
  db.query(sqlFetch, (err, result) => {
    if (err || result.length === 0) {
      toReturn = "Query Failed to Execute!";
      res.send(toReturn);
    } else {
      canReturn = result;
      res.send(canReturn);
    }
  });
});

// Send schedule
app.get("/api/sendDoctorSchedule", (req, res) => {
  if (canReturn != "") {
    res.send(canReturn);
  }
});

// fetch doctor schedule against the given ID
app.post("/api/fetchDoctorSchedule", (req, res) => {
  const receivedDoctor_Id = req.body.Doctor_ID;

  const sqlFetch =
    "SELECT * FROM doctors_schedule WHERE hid=?;";
  db.query(sqlFetch, [receivedDoctor_Id], (err, result) => {
    if (err || result.length === 0) {
      willReturn = "Invalid Doctor ID Entered!";
      res.send(willReturn);
    } else {
      willReturn = JSON.stringify(result[0]);
      res.send(willReturn);
    }
  });
});

app.get("/api/fetchDoctorSchedule", (req, res) => {
  if (willReturn != "") {
    res.send(willReturn);
  }
});

// update doctor's schedule information
app.post("/api/updatedoctorschedule", (req, res) => {
  const receivedDay = req.body.day;
  const receivedStartHour = req.body.startHour;
  const receivedStartMinute = req.body.startMinute;
  const receivedEndHour = req.body.endHour;
  const receivedEndMinute = req.body.endMinute;
  const receivedHW_ID = req.body.Check_ID;

  console.log("receieved: ", receivedDay, receivedStartHour, receivedStartMinute, receivedEndHour, receivedEndMinute, receivedHW_ID);

  const sqlUpdate = "UPDATE doctors_schedule SET day=?, start_hour=?, start_minute=?, end_hour=?, end_minute=? WHERE hid=?;";
  db.query(sqlUpdate, [receivedDay, receivedStartHour, receivedStartMinute, receivedEndHour, receivedEndMinute, receivedHW_ID], (err, result) => {
      toReturn = "Update Query Run";
      res.send(toReturn);
    }
  );
});

// add student appointment request
app.post("/api/scheduleAppointment", (req, res) => {
  const receivedHID = req.body.H_ID;
  const receivedSID = req.body.S_ID;
  const receivedDay = req.body.day;
  const receivedStartHour = req.body.startHour;
  const receivedStartMinute = req.body.startMinute;
  const receivedSlotStatus = req.body.slotStatus;
  //const receivedUID = req.body.User_ID;

  const sqlInsert =
    "INSERT INTO appointment (h_ID, s_ID, day, start_hour, start_minute, slot_status) VALUES (?,?,?,?,?,?);";
  db.query(
    sqlInsert,
    [receivedHID, receivedSID, receivedDay, receivedStartHour, receivedStartMinute, receivedSlotStatus],
    (err, result) => {
      toReturn = "Update Query Run";
      res.send(toReturn);
    }
  );
});

// View Appointment Requests
app.post("/api/AppointmentRequests", (req, res) => {
  const sqlFetch = "SELECT idappointment, h_ID, s_ID, day, start_hour, start_minute, slot_status FROM appointment";
  db.query(sqlFetch, (err, result) => {
    if (err || result.length === 0) {
      toReturn = "Query Failed to Execute!";
      res.send(toReturn);
    } else {
      canReturn = result;
      res.send(canReturn);
    }
  });
});

// Send Appointment Requests
app.get("/api/sendAppointmentRequests", (req, res) => {
  if (canReturn != "") {
    res.send(canReturn);
  }
});

// listening on port 3001
app.listen(process.env.PORT || PORT, () => {
  console.log(`Running on port ${PORT}`);
});
