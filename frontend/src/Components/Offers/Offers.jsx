import React from 'react'
import './Offers.css'

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-head'>
        {/*<h1 className='offers-white'>Get Exclusive Offers<h1 className='offers-red'>On Your Email</h1></h1> */}
        <h1 className='offers-white'>Get Exclusive Offers</h1><h1 className='offers-red'>On Your Email</h1>
        </div>

        <p>Subcribe to our newsletter and stay updated</p>
        <div className='offers-button'>
            <input type="email" placeholder='Your Email id'/>
            <button>Subcribe</button>
        </div>
        
    </div>
  )
}

export default Offers