import React, { useContext, useEffect, useState } from 'react'
import './CSS/About.css'
import vision_icon from '../Components/Assets/vision_icon.png'
import mission_icon from '../Components/Assets/mission_icon.png'
import { CourseContext } from '../Context/CourseContext'
import StarsCanvas from '../Components/Stars/Stars'

import {motion} from 'framer-motion'




const About = () => {

  const {currentUserData} = useContext(CourseContext);

  {/** 
  const [currentUserData, setCurrentUserData] = useState(null);

  useEffect(()=>{
    const fetchData = async () => {
      const token = localStorage.getItem('auth-token');

      const response = await fetch('http://localhost:4000/getuserdatanew',{
        method:'POST',
        headers: {
          'content-type':'application/json',
          'auth-token':token,
        }
      });
      if(response.ok){
        const data = await response.json();
        setCurrentUserData(data);
      }else{
        console.log('Error fetching current user data');
      }
    };
    fetchData();
  },[]);

  */}







  const [allUserData, setAllUserData] = useState([]);
  

  useEffect(()=>{
    fetch('http://localhost:4000/getallusers',{
      method:"GET",
    })
    .then((res)=>res.json())
    .then((data)=> {
      //console.log(data,"allUserData");
      setAllUserData(data.data);

      

    });
  },[])


  return (
    <div onClick={window.scrollTo(0,0)} className='about'>

      <div  className="about-left">
        <motion.div initial={{x:-300, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.8}}>
        <h1>So,</h1>
        <h1 className='about-left-line-2'>Here <h1 className='about-left-line-2-color'>We're</h1> </h1>
        </motion.div>
        <p>Lorem ipsum dolor sit amet consectetur. Congue vulputate mauris ut turpis tortor. Est sed posuere facilisi ullamcorper sit risus neque tortor vestibulum. Vel magna orci in nisl. Malesuada nisl placerat tincidunt arcu. Tortor risus quisq</p>
      </div>

      <div className="about-right">

        <div className="about-vision">

          <div className="about-vision-left">
            <img src={vision_icon} alt=''/>
          </div>

          <div className="about-vision-right">
            <h1>Our Vision</h1>
            <p>To create a society with educated and intelligent people enriched with kindness and empathy.</p>

          </div>

        </div>

        <div className="about-mission">

          <div className="about-mission-left">
          <img src={mission_icon} alt=''/>

          </div>

          <div className="about-mission-right">
            <h1>Our Mission</h1>
            <p>To guide the children of the nation to succeed in life through education by nurturing them with knowledge and good attitudes.</p>
          </div>
        </div>

      </div>

      <StarsCanvas/>



      
    </div>
  )
}

export default About