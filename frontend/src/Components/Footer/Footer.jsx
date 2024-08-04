import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import youtube from '../Assets/youtube.png'
import facebook from '../Assets/facebook.png'
import behance from '../Assets/behance.png'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {

    const Navigate = useNavigate();

  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=''/>
        </div>

        <ul onClick={window.scrollTo(0,0)} className='footer-links'>
            <li onClick={()=>Navigate("/")}>Home</li>
            <li onClick={()=>Navigate("/courses")}>Courses</li>
            <li>Offers</li>
            <li onClick={()=>Navigate("/about")}>About</li>
            <li onClick={()=>Navigate("/contact")}>Contact</li>
        </ul>

        <div className='footer-social-icon'>
            <div className="footer-icons-container">
                <img src={youtube} alt=''/>
            </div>
            <div className="footer-icons-container">
                <img src={facebook} alt=''/>
            </div>
            <div className="footer-icons-container">
                <img src={behance} alt=''/>
            </div>

        </div>

        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer