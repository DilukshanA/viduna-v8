import React from 'react'
import './Our.css'
import logo from '../Assets/logo.png'
import login from '../Assets/login.png'
import signup from '../Assets/signup.png'

const Our = () => {
  return (
    <div className='our'>

        <h1 className='our-white'>Our Viduna<h1 className='our-red'>Learning</h1></h1>

      <div className='our-bottom'>

        <div className='our-left'>
            <img src={logo} alt=''/>
        </div>
        <div className='our-middle'>
            
            <p>Log in to My Viduna from here to track your academic progress. Keeping a clear track of your progress helps you to rate and improve your studies.</p>
        </div>
        <div className='our-right'>
            <img className='our-right-login' src={login} alt=''/>
            <img className='our-right-signup' src={signup} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Our