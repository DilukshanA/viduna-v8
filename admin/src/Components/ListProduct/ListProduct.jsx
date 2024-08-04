import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'
import { Link, useNavigate } from 'react-router-dom'

const ListProduct = () => {

  //crete by me start

  const navigate = useNavigate();



  //crete by me end

  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () =>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product = async (id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method: 'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  //crete by me start


  //crete by me end

  return (
    <div className='list-product'>
      <h1>All Courses List</h1>

      <div className="listproduct-format-main">
        <p>Course</p>
        <p>Title</p>
        <p>Category</p>
        <p>Price</p>
        <p>Remove</p>
      </div>
      

      <div className="listproduct-allproduct">
        <hr />
        
        {allproducts.map((product,index)=>{
          return <><div key={index} className="listproduct-format-main listproduct-format">
            
            <img src={product.image} alt="" className="listproduct-product-icon" />
            <p>{product.course_name}</p>
            <p className='listproduct-format-category'>{product.category}</p>
            <p>{product.price}</p>
            <img onClick={()=>{remove_product(product.id)}} src={cross_icon} alt="" className="listproduct-remove-icon" />
            
            
            
            <button className='course-update-btn' onClick={()=>{navigate(`/product/${allproducts[index].id}`,{state:allproducts[index]})}}>Update</button>
            
          </div>
          
          <hr/>
          </>
        })}
        
      </div>

      
      

      {/*<Link to={`/product/${props.id}`}></Link>*/}
      {/*<Link to={`/product/${allproducts[index].id}`}></Link>*/}
    </div>
  )
}

export default ListProduct