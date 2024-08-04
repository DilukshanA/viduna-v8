import React, { useEffect, useState } from 'react'
import './UpdateUser.css'
import { useLocation } from 'react-router-dom'

export const UpdateUser = () => {

    const location = useLocation();
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");

    useEffect(()=>{
        console.log("location.state===",location.state);
        setName(location.state.name);
        setEmail(location.state.email);
        
        
    },[]);

    const updateData = ()=> {
        console.log('check updateData',name,email);
        fetch('http://localhost:4000/updateuser',{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                id:location.state._id,
                name:name,
                email:email
            }),
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            //window.location.href='/userprofile';
            window.location.replace('/userprofile');
        })
    }


  return (
    <div className='update-user'>
        <div className='update-user-container'>
           <div className='update-user-inputfield'>
                <p>Name</p>
                <input onChange={(e)=>setName(e.target.value)} defaultValue={name} placeholder='Name'/>
            </div> 
            
            <div className='update-user-inputfield'>
                <p>E-mail</p>
                <input onChange={(e)=>setEmail(e.target.value)} defaultValue={email} disabled placeholder='E-mail'/>
            </div>
            <button onClick={updateData}>Update Details</button>
        </div>
        
    </div>
  )
}
