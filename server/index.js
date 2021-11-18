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
    database: "localSchema"
})

// heroku setup
// mysql://ba41ba76295c24:421b299c@eu-cdbr-west-01.cleardb.com/heroku_26c145cc8987357?reconnect=true
// const db = mysql.createConnection({
//   host: "eu-cdbr-west-01.cleardb.com",
//   user: "ba41ba76295c24",
//   password: "421b299c",
//   database: "heroku_26c145cc8987357",
// });

let toReturn = "";  // for fetching role_id for login
let forReturn = ""; // for fetching student for admin
let willReturn = "" // for fetching doctor for admin

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

  // see role_id against check_id to determine table to check
  const sqlInsert = "INSERT INTO student VALUES (? , ? , ? , ? , ? , ? , ? , ? , ? , ? ) ;";
  db.query(sqlInsert, [receivedRollNumber, receivedID , receivedFN, receivedMN, receivedLN, receivedBatch, receivedcontact, receivedemergencyFName, receivedemergencyLName, receivedemergency,  ], (err, result) => 
  {
    console.log ("err", err)
   console.log  ("DONE", result)
  })
});

app.post("/api/adddoctor", (req, res) => {
  
  const receivedFN = req.body.firstName;
  const receivedMN = req.body.middleName;
  const receivedLN = req.body.lastName;
  const receivedworkerID = req.body.workerID;
  const receivedID = req.body.role_id;
  const receivedspecialization = req.body.specialziation;


  // see role_id against check_id to determine table to check
  const sqlInsert = "INSERT INTO healthcare_worker VALUES (? , ? , ? , ? , ? , ? ) ;";
  db.query(sqlInsert, [ receivedworkerID, receivedID , receivedFN, receivedMN, receivedLN,  receivedspecialization,  ], (err, result) => 
  {
  console.log ("err", err)
   console.log  ("DONE", result)
  })
});

app.post("/api/checkRole_id", (req, res) => {
  
  const receivedCheck_Id = req.body.Check_ID;
  const receivedPassword = req.body.Password;

  // see role_id against check_id to determine table to check
  const sqlFetch = "SELECT role_id FROM login WHERE check_id=? AND password=?;";
  db.query(sqlFetch, [receivedCheck_Id, receivedPassword], (err, result) => 
  {
    if (err || result.length === 0 )
    {
      console.log(err)
      toReturn = "Invalid Login Information";
      res.send(toReturn)
    }
    else
    {
      // correct login info, return role_id for page display 
      toReturn = JSON.stringify(result[0].role_id);
      res.send(toReturn)
    }
  })
});

app.post("/api/checkRole_id", (req, res) => {
  
  const receivedCheck_Id = req.body.Check_ID;
  const receivedPassword = req.body.Password;

  // see role_id against check_id to determine table to check
  const sqlFetch = "SELECT role_id FROM login WHERE check_id=? AND password=?;";
  db.query(sqlFetch, [receivedCheck_Id, receivedPassword], (err, result) => 
  {
    if (err || result.length === 0 )
    {
      // console.log(err)
      toReturn = "Invalid Login Information";
      res.send(toReturn)
    }
    else
    {
      // correct login info, return role_id for page display 
      toReturn = JSON.stringify(result[0].role_id);
      res.send(toReturn)
    }
  })
});

app.get("/api/send", (req, res) => 
{
  if (toReturn != "")
  {
    res.send(toReturn)
  }
});

app.post("/api/fetchStudentID", (req, res) => 
{
  const receivedStudent_Id = req.body.Student_ID;

  // fetch student against the given ID
  const sqlFetch = "SELECT * FROM student WHERE idstudent=?;";
  db.query(sqlFetch, [receivedStudent_Id], (err, result) => 
  {
    if (err || result.length === 0 )
    {
      forReturn = "Invalid Student ID Entered!";
      res.send(forReturn)
    }
    else
    {
      forReturn = JSON.stringify(result[0]);
      res.send(forReturn)
    }
  })
});

app.get("/api/fetchStudentID", (req, res) => 
{
  if (forReturn != "")
  {
    res.send(forReturn)
  }
});

app.post("/api/fetchDoctorID", (req, res) => 
{
  const receivedDoctor_Id = req.body.Doctor_ID;

  // fetch student against the given ID
  const sqlFetch = "SELECT * FROM healthcare_worker WHERE idhealthcare_worker=?;";
  db.query(sqlFetch, [receivedDoctor_Id], (err, result) => 
  {
    if (err || result.length === 0 )
    {
      willReturn = "Invalid Student ID Entered!";
      res.send(willReturn)
    }
    else
    {
      willReturn = JSON.stringify(result[0]);
      res.send(willReturn)
    }
  })
});

app.get("/api/fetchDoctorID", (req, res) => 
{
  if (willReturn != "")
  {
    res.send(willReturn)
  }
});



// listening on port 3001
app.listen(process.env.PORT || PORT, () => {
  console.log(`Running on port ${PORT}`);
});
