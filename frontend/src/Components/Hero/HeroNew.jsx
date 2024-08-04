import React from 'react'
import './HeroNew.css'
import dark_arrow from '../Assets/dark-arrow.png'
import { Link, useNavigate } from 'react-router-dom'

const HeroNew = () => {
  const Navigate = useNavigate();

  return (
    <div className='heronew'>

      <div className="heronew-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experience needed to excel in the dynamic field of education</p>
        <button onClick={()=> Navigate("/courses") } className='heronew-btn'>Explore more<img src={dark_arrow} alt=''/></button>
      </div>
        
    </div>
  )
}

export default HeroNew