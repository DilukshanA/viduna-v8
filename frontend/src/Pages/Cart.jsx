import React from 'react'
import CartItems from '../Components/CartItems/CartItems'
import './CSS/Cart.css'


const Cart = () => {
  return (
    <div onClick={window.scrollTo(0,0)} className='cart-page'>

      <CartItems/>
    </div>
  )
}

export default Cart