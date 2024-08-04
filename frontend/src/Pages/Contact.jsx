import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/Contact.css'
import contact_image from '../Components/Assets/contact_image.svg'
import whatsapp_icon from '../Components/Assets/whatsapp_icon.png'
import telegram_icon from '../Components/Assets/telegram_icon.png'
import my_pic from '../Components/Assets/my_pic.png'
import StarsCanvas from '../Components/Stars/Stars'

const Contact = () => {

  
  

  return (
    <div onClick={window.scrollTo(0,0)} className='contact'>
      <div className="contact-top">

        <h1>Please send us a message over here to contact us for more information</h1>
        <p>Follow our social media handles to stay up to date with the latest news and updates</p>
        <hr/>

      </div>

      <div className="contact-bottom-main">

      <div className="contact-bottom">
        <div className="contact-bottom-left">
          <h1>Office</h1>
          <p>Viduna Institute of Higher Education
          214, koggala Kade Junction, Galle</p>
          <span className='contact-bottom-left-mail'>support@vidunalearing.lk</span>
          <span>074 867 32 XX</span>
          <div className="contact-bottom-left-social-icon">
            <img className='contact-bottom-left-whatsapp' src={whatsapp_icon} alt=''/>
            <img className='contact-bottom-left-telegram' src={telegram_icon} alt=''/>

          </div>
        </div>

        <div className="contact-bottom-right">
          <img className='contact-bottom-right-viduna-img' src={contact_image} alt=''/>

        </div>

      </div>


      <div className="contact-bottom-web-owner">
        <div className='contact-bottom-web-owner-details'>
                   <h1>Web Designer</h1>
          <p className='contact-bottom-left-mail'>Dilukshan Abenayaka</p>
          <span className='contact-bottom-left-mail'>dadilukshan@gmail.com</span>
          <span className='contact-bottom-left-mail'>076 460 89 XX</span>
          <div className="contact-bottom-left-social-icon">
            
            <Link to='http://wa.me/+94764608975' target='_Blank' rel="noopener noreferrer">
              <img className='contact-bottom-left-whatsapp' src={whatsapp_icon} alt=''/>
            </Link>

            <img className='contact-bottom-left-telegram' src={telegram_icon} alt=''/>

          </div>
        </div>
 

          <img className='owner-pic' src={my_pic} alt=''/>
          
        </div>

        <img className='contact-bg-image' src={contact_image} alt=''/>


      
{/* 
      <div className="contact-bottom web-owner-container">
        <div className="contact-bottom-left web-owner">
          <h1>Web Designer</h1>
          <p>Dilukshan Abenayaka</p>
          <span className='contact-bottom-left-mail'>dadilukshan@gmail.com</span>
          <span>076 460 89 XX</span>
          <div className="contact-bottom-left-social-icon">
            
            <Link to='http://wa.me/+94740315962' target='_Blank' rel="noopener noreferrer">
              <img className='contact-bottom-left-whatsapp' src={whatsapp_icon} alt=''/>
            </Link>

            <img className='contact-bottom-left-telegram' src={telegram_icon} alt=''/>

          </div>
        </div>

        <div className="contact-bottom-right">
          <img src={contact_image} alt=''/>

        </div>

      </div>
      */}

      </div>

      <StarsCanvas/>









      
    </div>
  )
}

export default Contact