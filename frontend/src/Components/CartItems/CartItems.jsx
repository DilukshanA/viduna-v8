import React, { useContext } from 'react'
import './CartItems.css'
import remove_icon from '../Assets/remove_icon.png'
import { CourseContext } from '../../Context/CourseContext';


const CartItems = () => {
  const {getTotalCartItems,getTotalCartAmount, all_courses, cartItems, removeFromCart} = useContext(CourseContext);
  return (
    <div className='cartitmes'>
      
      <div className="cartitems-format-main">

        <p>Course</p>
        <p>Title</p>
        <p>Category</p>
        <p>Price</p>
        <p>Remove</p>
        
      </div>
      
      <hr/>

      {all_courses.map((e)=>{
        if(cartItems[e.id]>0){
          return       <div>
          <div className="cartitems-format cartitems-format-main">

            <img src={e.image} alt='' className='carticon-product-icon'/>
            <p>{e.course_name}</p>
            <p>{e.category}</p>
            <p>${e.price}</p>
            <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=''/>
            <button className='cartitems-remove-button' onClick={()=>{removeFromCart(e.id)}}>Remove</button>

          </div>
          <hr />
        </div>
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Total Cart</p>
              <p>{getTotalCartItems()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total Price</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className='cartitems-promobox-div'>
          {/*<div className="cartitems-promobox">*/}
            <input className='cartitems-promobox-input' type="text" placeholder='Promo Code'/>
            <button className='cartitems-promobox-button'>Submit</button>
          {/*</div>*/}
          </div>
        </div>
      </div>
        

    </div>
    
  )
}

export default CartItems
