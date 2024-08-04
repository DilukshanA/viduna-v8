import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>

        <img className='card-image' src={props.image} alt=""/>
        <p className='card-teacher-name'>{props.teacher_name}</p>
        <p className='card-degree'>{props.degree}</p>
        <p className='card-subject'>{props.subject}</p>

    </div>
  )
}

export default Card