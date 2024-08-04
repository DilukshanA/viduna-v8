import React, { useRef, useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'
import done_icon from '../../assets/done_icon.png'

const AddProduct = () => {

    // state vaiable for uploading image display in upload area
    const [image, setImage] = useState(false);
    const [Product_image, setProduct_image] = useState(false);
    const [owner_logo, setowner_logo] = useState(false);

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }
    const Product_imageHandler = (e) => {
        setProduct_image(e.target.files[0]);
    }
    const owner_logoHandler = (e) => {
        setowner_logo(e.target.files[0]);
    }

    // add course to database

    const [productDetails, setProductDetails] = useState({
        course_name: '',
        image: '',
        Product_image: '',
        product_details: '',
        owner_logo: '',
        category: 'Information Technology',
        owner_name: '',
        course_level: '',
        price: '',
    })

    const changeHandler = (e) => {
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const Add_Product1 = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        
        formData.append('product',owner_logo);

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp) => resp.json()).then((data)=>{responseData=data});

        if(responseData.success)
        {
            product.owner_logo = responseData.image_url;
            
            console.log(product);
        }
    }

    const Add_Product2 = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        
        formData.append('product',Product_image);
    
        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp) => resp.json()).then((data)=>{responseData=data});

        if(responseData.success)
        {
           product.Product_image = responseData.image_url;

            console.log(product);
        }
    }

    const Add_Product3 = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        
        formData.append('product',image);


        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp) => resp.json()).then((data)=>{responseData=data});

        if(responseData.success)
        {
            product.image = responseData.image_url;

            console.log(product);


            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert('Product Added'):alert('Failed');
            })
        }
    }

    {/* // original


    const Add_Product2 = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        
        formData.append('product',image);
        //formData.append('product',owner_logo);
        //formData.append('owner_logo',owner_logo);
        

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp) => resp.json()).then((data)=>{responseData=data});

        if(responseData.success)
        {
           product.image = responseData.image_url;
           
          // product.owner_logo = responseData.image_url;
           //product.owner_logo = responseData.owner_logo_url;
            
            
            console.log(product);

            


            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert('Product Added'):alert('Failed');
            })
        }
    }

    */}


    const Add_Product = async () => {
        Add_Product1();
        Add_Product2();
        Add_Product3();
        
      };


  return (
    <div className='add-product'>
        <div className="addproduct-itemfield">
            <p>Course Name</p>
            <input value={productDetails.course_name} onChange={changeHandler} type='text' name='course_name' placeholder='Type here' />
        </div>

        <div className="addproduct-price-level">
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input value={productDetails.price} onChange={changeHandler} type='text' name='price' placeholder='Type here' />
            </div>
            <div className="addproduct-itemfield">
                <p>Course Level</p>
                <input value={productDetails.course_level} onChange={changeHandler} type='text' name='course_level' placeholder='Type here' />
            </div>
        </div>

        <div className="addproduct-itemfield">
            <p>Course Category</p>
            <select value={productDetails.category} onChange={changeHandler} name='category' className='add-product-selector'>
                <option value="Information Technology">Information Technology</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
            </select>
        </div>

        

        <div className="addproduct-image-productimage">

        <div className='addproduct-image-productimage-with-title'>
            <p>Image</p>
        <div className="addproduct-itemfield">
            <label htmlFor='file-input-image'>
                <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumnail-img' alt=''/>
            </label>
            <input onChange={imageHandler} type='file' name='image' id='file-input-image' hidden/>
        </div>
        </div>

        <div className='addproduct-image-productimage-with-title'>
            <p>Product Image</p>
        <div className="addproduct-itemfield">
            <label htmlFor='file-input-product-image'>
                <img src={Product_image?URL.createObjectURL(Product_image):upload_area} className='addproduct-thumnail-img' alt=''/>
            </label>
            <input onChange={Product_imageHandler} type='file' name='Product_image' id='file-input-product-image' hidden/>
        </div>
        </div>
        </div>
        

        <div className="addproduct-owner-name-logo">
        <div className="addproduct-itemfield">
            <p>Owner Name</p>
            <input value={productDetails.owner_name} onChange={changeHandler} type='text' name='owner_name' placeholder='Type here' />
        </div>
        <p>Owner Image</p>
        <div className="addproduct-itemfield">
            <label htmlFor='file-input-owner-logo'>
                <img src={owner_logo?URL.createObjectURL(owner_logo):upload_area} className='addproduct-thumnail-img' alt=''/>
            </label>
            <input onChange={owner_logoHandler} type='file' name='owner_logo' id='file-input-owner-logo' hidden/>
        </div>
        </div>

        <div className="addproduct-itemfield">
            <p>Course Details</p>
            <input value={productDetails.product_details} onChange={changeHandler} className='details-input' type='text' name='product_details' placeholder='Type here' />
        </div>

        <button onClick={()=>{Add_Product() }} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct