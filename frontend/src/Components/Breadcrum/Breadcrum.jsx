import React from 'react'
import './Breadcrum.css'
import arow_icon from '../Assets/arow_icon.png'


const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='Breadcrum'>
        Home <img src={arow_icon} alt=''/> Courses <img src={arow_icon} alt=''/> {product.category} <img src={arow_icon} alt=''/> {product.course_name}
    </div>
  )
}

export default Breadcrum