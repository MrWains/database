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

var toReturn = "";

app.post("/api/checkRole_id", (req, res) => {
  const receivedCheck_Id = req.body.Check_ID;
  const receivedPassword = req.body.Password;

  // see role_id against check_id to determine table to check
  const sqlFetch = "SELECT role_id FROM login WHERE check_id=? AND password=?;";
  db.query(sqlFetch, [receivedCheck_Id, receivedPassword], (err, result) => 
  {
    if (err || result.length === 0 )
    {
      toReturn = "Invalid Login Information";
    }
    else
    {
      // correct login info, return role_id for page display 
      toReturn = JSON.stringify(result[0].role_id);
    }
  })
});

app.get("/api/send", (req, res) => 
{
  res.send(toReturn)
})



// listening on port 3001
app.listen(process.env.PORT || PORT, () => {
  console.log(`Running on port ${PORT}`);
});
