import React, { useContext } from 'react'
import { CourseContext } from '../Context/CourseContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import CartItems from '../Components/CartItems/CartItems';

const Product = () => {
  const {all_courses} = useContext(CourseContext);
  const {productId} = useParams();
  const product = all_courses.find((e)=>e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product = {product}/>
    </div>
  )
}

export default Product