import React, { useContext } from 'react'
import './ProductDisplay.css'
import quiz_logo from '../Assets/quiz_logo.png'
import linkedin_logo from '../Assets/linkedin_logo.png'
import { CourseContext } from '../../Context/CourseContext'

const ProductDisplay = (props) => {

  const {product} = props;
  const {addToCart} = useContext(CourseContext);

  return (
    <div onClick={window.scrollTo(0,0)} className='productdisplay'>

      <h1 className='productdisplay-category'>{product.course_name}</h1>

      <div className="productdisplay-container">

      <div className="productdisplay-left">
        <img src={product.Product_image} alt=''/>
      </div>

      <div className="productdisplay-right">
        <h2>Details to know</h2>
        <p className='productdisplay-right-details'>{product.product_details}</p>

        <div className="productdisplay-right-certificate">
          <div className="productdisplay-right-certificate-left">
            <img src={linkedin_logo} alt=''/>
            <p>Shareable certificate</p>
            <span>Add to your LinkedIn profile</span>
 
          </div>
          <div className="productdisplay-right-certificate-right">
            <img src={quiz_logo} alt=''/>
            <p>Assessments</p>
            <span>8 quizzes</span>

          </div>
        </div>
        <p className='productdisplay-right-price'>Value : ${product.price}</p>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <span>Category: {product.category}</span>
      </div>

      </div>

    </div>
  )
}

export default ProductDisplay