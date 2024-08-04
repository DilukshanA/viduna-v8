import React, { useEffect, useState } from 'react'
import './NewCollections.css'
//import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {

  const [new_collections, setNew_collections] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNew_collections(data));
  },[])

  return (
    <div className='new-collections'>
        <h1 className='new-collections-white'>New<h1 className='new-collections-red' >Courses</h1> </h1>
        <div className="new-collections-item">
            {new_collections.map((item,i)=>{
                return<Item key={i} id={item.id} image={item.image} owner_logo={item.owner_logo} owner_name={item.owner_name} course_name={item.course_name} course_level={item.course_level}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections