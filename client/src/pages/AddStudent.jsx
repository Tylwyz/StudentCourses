import React from 'react'
import { useState } from 'react'
import axios from "axios";


const AddStudent = ()=>{
    const [students,setStudents] = useState({
        student_id:"",
        student_name:"",
        date_of_birth:"",
        email:""

    })
    const [error,setError] = useState(false)

    //const navigate = useNavigate();

const handelChange = (e) =>{
    setStudents(prev=>({...prev, [e.target.name]: e.target.value}));
}

const handleClick = async e =>{
    e.preventDefault()
    try {
        await axios.post("http://localhost:8800/students", students);
        
    } catch (err) {
        console.log(err);
        setError(true)
    }

}

console.log(students)
    return (
        <div className='form'>
            <h1> Add a new student </h1>
            <input  type="number" placeholder="Student ID" onChange={handelChange} name="student_id"></input>
            <input  type="text" placeholder="Student Name"name="student_name" onChange={handelChange} ></input>
            <input  type="text" placeholder="Student Date of Birth" onChange={handelChange} name="date_of_birth"></input>
            <input  type="email" placeholder="Student email" onChange={handelChange} name="email"></input>
            <button onClick={handleClick}>Add Student </button>
        </div>
    )
}

export default AddStudent