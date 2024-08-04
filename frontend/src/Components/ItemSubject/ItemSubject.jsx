import React from 'react'
import './ItemSubject.css'

const ItemSubject = (props) => {
  return (
    <div className='item-subject'>
        <img className="item-subject-image" src={props.image} alt="" />

        <p className='item-subject-name'>{props.subject_name}</p>
        <p className='item-subject-level'>{props.subject_level}</p>

    </div>
  )
}

export default ItemSubject