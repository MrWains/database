const express = require("express")
const app = express()
const mysql = require("mysql")
const db = mysql.createPool({
    host: "localhost",
    user: "new_user",
    password: "password",
    database: "healthatlums"

})

app.get("/", (req,res) => {
    const sqlInsert = "INSERT INTO FAQs (faq_id, question, answer) VALUES ('Whooo am I?', 'A loooser');"
    
    db.query(sqlInsert, (err,result) => {
        res.send("Bye World...")
        console.log("result", result)
        console.log("err", err)
    })
})

// listening on port 3001
app.listen(3001, () => {
    console.log("Running on port 3001")
})


