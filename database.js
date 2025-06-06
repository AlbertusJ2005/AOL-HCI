const mysql = require("mysql")
const cors = require("cors")
const express = require("express")

const app = express()

app.use(cors())

app.use(express.json())

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "contact-aol"
});

app.post("/contact", function(req,res) {
  const {name, email, subject, description} = req.body;
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(`INSERT INTO contact (name, email, subject, description) VALUES ("${name}", "${email}", "${subject}", "${description}")`, function (err, result) {
      if (err) throw err;
      res.status(200).send("message send")
    });
  }); 
})
app.listen(4000, function() {
  console.log("server connecting in port 4000");
})