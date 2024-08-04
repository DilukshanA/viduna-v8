import React from 'react'
import './CourseSubject.css'
import course_subject from '../Assets/course_subject'
import ItemSubject from '../ItemSubject/ItemSubject'
import {Link} from 'react-router-dom'

const CourseSubject = () => {
  return (
    <div onClick={window.scrollTo(0,0)} className='course-subject'>
        <h1 className='courses-subject'>Course Category</h1>

        <div className='courses-subject-item'>
            {course_subject.map((item,i)=>{
                return <Link style={{textDecoration:'none'}} to={item.path}><ItemSubject key={i} id={item.id} image={item.image} subject_name={item.subject_name} subject_level={item.subject_level}/></Link>
            })}
        </div>
        
    </div>
  )
}

export default CourseSubject