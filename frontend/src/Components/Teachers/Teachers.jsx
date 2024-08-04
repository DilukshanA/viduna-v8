import React from 'react'
import './Teachers.css'
import data_teachers from '../Assets/data_teachers'
import Card from '../Card/Card'

const Teachers = () => {
  return (
    <div className='teachers'>
      
        <h1 className='teachers-white'>Our<h1 className='teachers-red' >Teachers</h1> </h1>

        <div className='teachers-card'>
            {data_teachers.map((card,i)=>{
                return <Card key={i} id={card.id} image={card.image} teacher_name={card.teacher_name} degree={card.degree} subject={card.subject}/>
            })}
        </div>

        

    </div>
  )
}

export default Teachers