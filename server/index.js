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
  database: "localSchema",
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
    "INSERT INTO student VALUES (? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? ) ;";
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
      receivedemergency,
      receivedPassword,
    ],
    (err, result) => {
      console.log("err", err);
      console.log("DONE", result);
      res.send("success");
    }
  );
  const sqlAddAccount = "INSERT INTO login VALUES (?,?,?);";
  db.query(
    sqlAddAccount,
    [receivedRollNumber, receivedID, receivedPassword],
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
    "INSERT INTO healthcare_worker VALUES (? , ? , ? , ? , ? , ? ,?) ;";
  db.query(
    sqlInsert,
    [
      receivedworkerID,
      receivedID,
      receivedFN,
      receivedMN,
      receivedLN,
      receivedspecialization,
      receivedPassword,
    ],
    (err, result) => {
      console.log("err", err);
      console.log("DONE", result);
      res.send("successfully");
    }
  );

  const sqlAddAccount = "INSERT INTO login VALUES (?,?,?);";
  db.query(
    sqlAddAccount,
    [receivedworkerID, receivedID, receivedPassword],
    (err, result) => {
      console.log("err", err);
      console.log("DONE", result);
    }
  );
});

app.post("/api/checkRole_id", (req, res) => {
  const receivedCheck_Id = req.body.Check_ID;
  const receivedPassword = req.body.Password;

  // see role_id against check_id to determine table to check
  const sqlFetch = "SELECT role_id FROM login WHERE check_id=? AND password=?;";
  db.query(sqlFetch, [receivedCheck_Id, receivedPassword], (err, result) => {
    if (err || result.length === 0) {
      console.log(err);
      toReturn = "Invalid Login Information";
      res.send(toReturn);
    } else {
      // correct login info, return role_id for page display
      toReturn = JSON.stringify(result[0].role_id);
      res.send(toReturn);
    }
  });
});

app.post("/api/checkRole_id", (req, res) => {
  const receivedCheck_Id = req.body.Check_ID;
  const receivedPassword = req.body.Password;

  // see role_id against check_id to determine table to check
  const sqlFetch = "SELECT role_id FROM login WHERE check_id=? AND password=?;";
  db.query(sqlFetch, [receivedCheck_Id, receivedPassword], (err, result) => {
    if (err || result.length === 0) {
      // console.log(err)
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

  // fetch student against the given ID
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

  // INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1, value2, value3, ...);
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

// listening on port 3001
app.listen(process.env.PORT || PORT, () => {
  console.log(`Running on port ${PORT}`);
});
