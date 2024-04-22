import React from 'react'
import { useState } from 'react'
import { Grid } from "gridjs";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";


const UpdateStudent = ()=>{
    const [students,setStudents] = useState({
        student_name:"",
        date_of_birth:"",
        email:""

    })
    const [error,setError] = useState(false)

    const navigate = useNavigate();
    const location = useLocation()

    const studentId =(location.pathname.split('/')[2])


const handelChange = (e) =>{
    setStudents(prev=>({...prev, [e.target.name]: e.target.value}));
}

const handleClick = async e =>{
    e.preventDefault()
    try {
        await axios.post("http://localhost:8800/students/"+ studentId, students);
        navigate("/")
        
    } catch (err) {
        console.log(err);
        setError(true)
    }

}

console.log(students)
    return (
        <div className='form'>
            <h1> Update student </h1>
            <input  type="text" placeholder="Student Name"name="student_name" onChange={handelChange} ></input>
            <input  type="text" placeholder="Student Date of Birth" onChange={handelChange} name="date_of_birth"></input>
            <input  type="email" placeholder="Student email" onChange={handelChange} name="email"></input>
            <button onClick={handleClick}>Update Student </button>
            {error && "Something went wrong!"}
        </div>
    )
}

export default UpdateStudent