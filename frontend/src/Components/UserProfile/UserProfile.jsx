import React, { useContext, useEffect, useState } from 'react'
import './UserProfile.css'
import { CourseContext } from '../../Context/CourseContext'
import { useNavigate } from 'react-router-dom';




const UserProfile = () => {

    const {currentUserData} = useContext(CourseContext);
    const navigate = useNavigate();

    //my start

    const [updateCheck , setUpdateCheck] = useState(false);
    const [typePassword , setTypePassword] = useState('');
    const [passwordWrong ,setPasswordWrong] = useState(true);
    

    const updateCheckOnOff = ()=> {
        setUpdateCheck(!updateCheck);
    }

    const changeHandler = (e) => {
        console.log('changeHandler');
        console.log(e.target);
        const value = e.target.value;
        const name = e.target.name;
        console.log(name,value);
        setTypePassword(value);
        console.log("type password====",typePassword);
    }

    const updateCheckHandler = ()=> {
        console.log('check updateCheckHandler');
        console.log(currentUserData.password);
        if(currentUserData.password===typePassword)
        {
            console.log('password matched');
            navigate('/updateuser', {state : currentUserData});
        }
        else{
            console.log('password not matched');
            setPasswordWrong(false);
            console.log('passwordWrong',passwordWrong);
            
        }
    }

    //my end

  return (
    <div className='user-profile'>
        
        <div className='user-profile-details'>
            <li>
                <p className='user-profile-details-name'>Name : </p>
                <h3>{currentUserData.name}</h3>
            </li>
            <li>
                <p>Email : </p>
                <h3>{currentUserData.email}</h3>
            </li>
            {/*
            <button className='user-profile-details-btn' onClick={()=>navigate('/updateuser', {state : currentUserData})}>Update Data</button>
            */}





            <button className={`user-profile-details-btn ${updateCheck?"cancel":""}`} onClick={updateCheckOnOff} >{updateCheck?"Cancel Change":"Update"}</button>

            {
            updateCheck
            ?<div className='update-user-check-container'>

            <div className='update-user-inputfield-user-profile'>
                <p>Enter your Current Password</p>
                <input onChange={changeHandler} name='current-password' placeholder='Type here'/>
            </div>

            {passwordWrong?<></>:<p className='update-user-check-container-wrong-password'>Wrong Password</p>}
            <button className='user-profile-details-btn next' onClick={updateCheckHandler}>Next</button>
            
            </div>
            :<></>
            }
            
        </div>
    </div>
  )
}

export default UserProfile