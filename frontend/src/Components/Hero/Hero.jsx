import React from 'react'
import './Hero.css'
import hero_banner from '../Assets/hero_banner.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <p>Improve Your</p>
            <p>Online Learning</p>
            <p>Experience Better</p>
            <p>Instantly</p>
            <span>Welcome to Viduna Learning, we're dedicated to accelerating business growth through our cutting-edge solutions. As industry pioneers, we leverage the latest technologies and innovative strategies to propel your business forward in today's dynamic market landscape.</span>

        </div>

        <div className='hero-right'>
            <img src={hero_banner} alt="" />

        </div>

    </div>
  )
}

export default Hero