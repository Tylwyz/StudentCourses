import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'


const Students = ()=>{
    const [Students,setStudents] = useState([])

    useEffect(()=>{
        const fetchAllStudents = async ()=>{
            try{
                const res = await axios.get("http:localhost:8800/students")
                console.log(res)

            }catch(err){
                console.log(err)
            }
        }
        fetchAllStudents
    },[])
}

export default Students