import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'
import AddProductv2 from '../../Components/AddProductv2/AddProductv2'
import AddProductNew from '../../Components/AddProductNew/AddProductNew'
import AllUsersList from '../../Components/AllUsersList/AllUsersList'
import ProductUpdate from '../ProductUpdate/ProductUpdate'
import AddProductv4 from '../../Components/AddProductv4/AddProductv4'

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
        <Route path='/addproductv1' element={<AddProductNew/>}/>
        <Route path='/addproductv2' element= {<AddProductv2/>}/>
        <Route path='/alluserslist' element= {<AllUsersList/>}/>
        <Route path='/addproductv4' element= {<AddProductv4/>}/>
        

        <Route path="/product" element={<ProductUpdate/>}>
          <Route path=':productId' element={<ProductUpdate/>}/>
        </Route>
        
      </Routes>
    </div>
  )
}

export default Admin