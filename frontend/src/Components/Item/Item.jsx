import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import owner_logo from '../Assets/owner_logo.png'

const Item = (props) => {
  return (
    <div onClick={window.scrollTo(0,0)} className='item'>
      <Link style={{textDecoration:'none'}} to={`/product/${props.id}`}>
        <img className="item-image" src={props.image} alt="" />
        
        <div className='item-top-name'>
            <img className='item-owner-logo' src={props.owner_logo} alt="" />
            <p className='item-owner-name'>{props.owner_name}</p>

        </div>

        <p className='item-course-name'>{props.course_name}</p>
        <p className='item-course-level'>{props.course_level}</p>
        
        </Link>
    </div>
  )
}

export default Item