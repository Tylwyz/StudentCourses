import React from 'react'
import { Grid } from "gridjs";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Student = ()=>{

    const [students,setStudents] = useState([])

    useEffect(()=>{
        const fetchAllStudents = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/students")
                setStudents(res.data);
                console.log(res);
            }catch(err){
                console.log(err);
            }
        }
        fetchAllStudents()
    })

    const handleDelete = async (student_id) => {
      try {
        await axios.delete(`http://localhost:8800/students/`+student_id);
        window.location.reload()
      } catch (err) {
        console.log(err);
      }
    };

    return (
<div>
      <h1>Student List</h1>
      <div className="students">

          <div key={students.student_id} className="student">
            <h2>{students.student_name}</h2>
            <p>{students.date_of_birth}</p>
            <p>{students.email}</p>
            <button className="delete" onClick={() => handleDelete(students.student_id)}>Delete</button>
            <button className="update">
              <Link
                to={`/updateStudent/${students.student_id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
              </button>
          </div>
      </div>
      <button className="AddStudent">
      <Link to="/AddStudent" style={{ color: "inherit", textDecoration: "none" }}>
          Add new Student
        </Link>
      </button>
      <script src="https://unpkg.com/gridjs/dist/gridjs.umd.js"></script>
      <script src="src/index.js"></script>
    </div>
  );
};

export default Student;