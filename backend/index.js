import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"password",
    database: "studentcourses"

})

app.use(express.json())
app.use(cors("*"))

app.get("/", (req,res)=>{
    console.log("Entered")
    res.json("This is the backend")
})

app.get("/students", (req,res)=>{
    const q = "SELECT * FROM students";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });

  app.post("/students", (req, res) => {
    const q = "INSERT INTO books(`student_id`, `student_name`, `date_of_birth`, `email`) VALUES (?)";
  
    const values = [
      req.body.student_id,
      req.body.student_name,
      req.body.date_of_birth,
      req.body.email,
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

app.listen(8800, ()=>{
    console.log("connected to backend")
})