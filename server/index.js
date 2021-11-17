const express = require("express")
const app = express()
const mysql = require("mysql")

// const db = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "healthatlums"
// })

const db = mysql.createConnection({
    host: "eu-cdbr-west-01.cleardb.com",
    user: "ba41ba76295c24",
    password: "421b299c",
    database: "heroku_26c145cc8987357"
})


mysql://ba41ba76295c24:421b299c@eu-cdbr-west-01.cleardb.com/heroku_26c145cc8987357?reconnect=true

app.get("/", (req,res) => {
    const sqlInsert = "INSERT INTO testing VALUES (3, 'wains');"
    const sqlDelete = "DELETE FROM testing WHERE id=1;"
    
    // db.query(sqlInsert, (err,result) => {
    //     res.send("Bye World...")
    //     console.log("result", result)
    //     console.log("err", err)
    // })
    db.query(sqlDelete, (err,result) => {
        res.send("Bye World...")
        console.log("result", result)
        console.log("err", err)
    })
})

// listening on port 3001
app.listen(3001, () => {
    console.log("Running on port 3001")
})


