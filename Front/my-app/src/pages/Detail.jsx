import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import "./Detail.css"
const Detail = () => {
    const[data,setData]=useState({})
    const {id}=useParams()
    useEffect(()=>{
    axios.get(`http://localhost:8087/product/${id}`).then(res=>{
        setData(res.data)
    })
    },[])
  return (
    <div className='detal'>
     <div> <img src={`${data.images}`} alt="" /></div>
        <div>


            <p>{data.name}</p>
        <p>{data.desci}</p> 
        </div>
       
    </div>
  )
}

export default Detail