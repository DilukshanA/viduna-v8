import React, {useContext} from 'react'
import './CSS/CourseCategory.css'
import { CourseContext } from '../Context/CourseContext'
import Item from '../Components/Item/Item'

const CourseCategory = (props) => {

    const {all_courses} = useContext(CourseContext);
  return (
    <div className='course-category'>

        <h1 className='course-category-title'>{props.category}</h1>
        <div className='coursecategory-courses'>
            {all_courses.map((item,i)=>{
                if(props.category===item.category){
                    return <Item key={i} id={item.id} image={item.image} owner_logo={item.owner_logo} owner_name={item.owner_name} course_name={item.course_name} course_level={item.course_level}/>
                }
                else{
                    return null;
                }

            })}

        </div>
        <div className='course-category-loadmore'>
            Explore More
        </div>

    </div>
  )
}

export default CourseCategory