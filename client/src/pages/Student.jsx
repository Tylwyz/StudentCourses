import React from 'react'
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

    return (
<div>
      <h1>Student List</h1>
      <div className="students">
        {students.map((students) => (
          <div key={students.id} className="student">
            <h2>{students.student_name}</h2>
            <p>{students.date_of_birth}</p>
            <p>{students.email}</p>
          </div>
        ))}
      </div>
      <button className="AddStudent">
      <Link to="/AddStudent" style={{ color: "inherit", textDecoration: "none" }}>
          Add new book
        </Link>
      </button>
    </div>
  );
};

export default Student;