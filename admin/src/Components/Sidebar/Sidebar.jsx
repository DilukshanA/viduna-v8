import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from '../../assets/Product_list_icon.svg'
import users_list_icon from '../../assets/users_list_icon.png'
import { useState } from 'react'

const Sidebar = () => {
    const [menu, setMenu] = useState(false);

    

  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration: 'none'}}>
        <div onClick={()=>{setMenu("add-product")}} className={menu==="add-product"?'sidebar-item-on':'sidebar-item'}>
            <img src={add_product_icon} alt=''/>
            <p>Add Product</p>
        </div>
        </Link>

        <Link to={'/addproductv1'} style={{textDecoration: 'none'}}>
        <div onClick={()=>{setMenu("add-product-v1")}} className={menu==="add-product-v1"?'sidebar-item-on':'sidebar-item'}>
            <img src={add_product_icon} alt=''/>
            <p>Add Product v1</p>
        </div>
        </Link>

        <Link to={'/addproductv2'} style={{textDecoration: 'none'}}>
        <div onClick={()=>{setMenu("add-product-v2")}} className={menu==="add-product-v2"?'sidebar-item-on':'sidebar-item'}>
            <img src={add_product_icon} alt=''/>
            <p>Add Product v2</p>
        </div>
        </Link>

        <Link to={'/addproductv4'} style={{textDecoration: 'none'}}>
        <div onClick={()=>{setMenu("add-product-v4")}} className={menu==="add-product-v4"?'sidebar-item-on':'sidebar-item'}>
            <img src={add_product_icon} alt=''/>
            <p>Add Product v4</p>
        </div>
        </Link>

        <Link to={'/listproduct'} style={{textDecoration: 'none'}}>
        <div onClick={()=>{setMenu("list-product")}} className={menu==="list-product"?'sidebar-item-on':'sidebar-item'}>
            <img src={list_product_icon} alt=''/>
            <p>Product List</p>
        </div>
        </Link>

        <Link to={'/alluserslist'} style={{textDecoration: 'none'}}>
        <div onClick={()=>{setMenu("all-users-list")}} className={menu==="all-users-list"?'sidebar-item-on':'sidebar-item'}>
            <img className='sidebar-icon' src={users_list_icon} alt=''/>
            <p>All Users List</p>
        </div>
        </Link>
    </div>
  )
}

export default Sidebar