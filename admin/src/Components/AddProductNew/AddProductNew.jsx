import React, {useState} from 'react'
import './AddProductNew.css'

const AddProductNew = () => {

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

    const Add_Product = async () => {
        console.log(productDetails);
        //let responseData;
        let product = productDetails;
    
       // let formData = new FormData();
        
        //formData.append('product',image);
    
    /*
        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp) => resp.json()).then((data)=>{responseData=data});
    */
    
      // if(responseData.success)
       // {
            //product.image = responseData.image_url;
    
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
        //}
    }
    

  return (
    <div className='add-productnew'>

        <div className="addproductnew-itemfield">
            <p>Course Name</p>
            <input value={productDetails.course_name} onChange={changeHandler} type='text' name='course_name' placeholder='Type here' />
        </div>

        <div className="addproductnew-price-level">
            <div className="addproductnew-itemfield">
                <p>Price</p>
                <input value={productDetails.price} onChange={changeHandler} type='text' name='price' placeholder='Type here' />
            </div>
            <div className="addproductnew-itemfield">
                <p>Course Level</p>
                <input value={productDetails.course_level} onChange={changeHandler} type='text' name='course_level' placeholder='Type here' />
            </div>
        </div>

        <div className="addproductnew-itemfield">
            <p>Course Category</p>
            <select value={productDetails.category} onChange={changeHandler} name='category' className='add-productnew-selector'>
                <option value="Information Technology">Information Technology</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Software Development">Software Development</option>
            </select>
        </div>

        <div className="addproductnew-itemfield">
            <p>Image Link or Base64</p>
            <input value={productDetails.image} onChange={changeHandler} type='text' name='image' placeholder='Type here' />
        </div>
        <div className="addproductnew-itemfield">
            <p>Product Image Link or Base64</p>
            <input value={productDetails.Product_image} onChange={changeHandler} type='text' name='Product_image' placeholder='Type here' />
        </div>

        <div className="addproductnew-itemfield">
            <p>Owner Name</p>
            <input value={productDetails.owner_name} onChange={changeHandler} type='text' name='owner_name' placeholder='Type here' />
        </div>

        <div className="addproductnew-itemfield">
            <p>Owner Image Link or Base64</p>
            <input value={productDetails.owner_logo} onChange={changeHandler} type='text' name='owner_logo' placeholder='Type here' />
        </div>

        <div className="addproductnew-itemfield">
            <p>Course Details</p>
            <input value={productDetails.product_details} onChange={changeHandler} type='text' name='product_details' placeholder='Type here' />
        </div>

        <button onClick={()=>{Add_Product()}} className='addproductnew-btn'>ADD</button>

    </div>
  )
}

export default AddProductNew