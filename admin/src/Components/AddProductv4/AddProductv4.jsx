import React, { useState } from 'react'
import './AddProductv4.css'
import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage'
import app from '../../../firebase';
import { useNavigate } from 'react-router-dom';

const AddProductv4 = () => {

    const [uploading_image , setUploading_image] = useState(false);
    const [imageURL , setImageURL] = useState("");

    const [uploading_Product_image , setUploading_Product_image] = useState(false);
    const [Product_imageURL , setProduct_imageURL] = useState("");

    const [uploading_owner_image , setUploading_owner_image] = useState(false);
    const [owner_imageURL , setowner_imageURL] = useState("");

    const [addText , setAddText] = useState('ADD');

    

    const handleRefresh = () => {
        window.location.reload();
    }

    
    const handleImageChange = async (e) => {
        console.log(e.target.files[0]);
        const image = e.target.files[0];

        if(image)
        {
            try {
                setUploading_image(true);
                const storage = getStorage(app);
                const storageRef = ref(storage, "images/"+image.name);

                await uploadBytes(storageRef, image);
                const downloadURL = await getDownloadURL(storageRef);
                console.log("downloadURL----",downloadURL);
                setImageURL(downloadURL);
                let product = productDetails;
                console.log("image url",imageURL);
                if(imageURL)
                    {
                        product.image = imageURL;
                        
                    }
                
            } catch (error) {
                console.log(error);
            } finally{
                setUploading_image(false);
                
                
            }  
        }
    }


    const handleProduct_imageChange = async (e) => {
        console.log(e.target.files[0]);
        const Product_image = e.target.files[0];

        if(Product_image)
        {
            try {
                setUploading_Product_image(true);
                const storage = getStorage(app);
                const storageRef = ref(storage, "images/"+Product_image.name);

                await uploadBytes(storageRef, Product_image);
                const downloadURL = await getDownloadURL(storageRef);
                console.log(downloadURL);
                setProduct_imageURL(downloadURL);

            } catch (error) {
                console.log(error);
            } finally{
                setUploading_Product_image(false);
            }

            
        }
    }

    const handleOwner_imageChange = async (e) => {
        console.log(e.target.files[0]);
        const owner_image = e.target.files[0];

        if(owner_image)
        {
            try {
                setUploading_owner_image(true);
                const storage = getStorage(app);
                const storageRef = ref(storage, "images/"+owner_image.name);

                await uploadBytes(storageRef, owner_image);
                const downloadURL = await getDownloadURL(storageRef);
                console.log(downloadURL);
                setowner_imageURL(downloadURL);

            } catch (error) {
                console.log(error);
            } finally{
                setUploading_owner_image(false);
            }

            
        }
    }

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
        //console.log(productDetails);
    }

    const Add_Product = async () => {

        
       // console.log('before====',productDetails);
        let product = productDetails;
        product.image = imageURL;
        product.Product_image = Product_imageURL;
        product.owner_logo = owner_imageURL;
        //console.log('after====',productDetails);
        //console.log('after product',product);

        if(productDetails.course_name && productDetails.price && productDetails.course_level && productDetails.category && productDetails.owner_name && productDetails.product_details && productDetails.image && productDetails.Product_image && productDetails.owner_logo)
            {
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
            console.log('after finish====',productDetails);
            setAddText('ADDED SUCCESS');
        }
        else{
            alert('Please Fill all the fields');
        }
        {/** 
    
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
            console.log('after finish====',productDetails);
            */}
        
    }


  return (
    <div className='add-product-v2'>

    <div className="addproduct-v2-itemfield">
        <p>Course Name</p>
        <input onChange={changeHandler} value={productDetails.course_name}  type='text' name='course_name' placeholder='Type here' />
    </div>

    <div className="addproduct-v2-price-level">
        <div className="addproduct-v2-itemfield">
            <p>Price</p>
            <input value={productDetails.price} onChange={changeHandler} type='text' name='price' placeholder='Type here' />
        </div>
        <div className="addproduct-v2-itemfield">
            <p>Course Level</p>
            <input value={productDetails.course_level} onChange={changeHandler} type='text' name='course_level' placeholder='Type here' />
        </div>
    </div>


    <div className="addproduct-v2-itemfield">
        <p>Course Category</p>
        <select value={productDetails.category} onChange={changeHandler} name='category' className='add-product-v2-selector'>
            <option value="Information Technology">Information Technology</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Software Development">Software Development</option>
        </select>
    </div>

    <div className='addproduct-v2-image-productimage'>
        <div className='addproduct-v2-image-productimage-with-title'>
            <p>Cover Image</p>

            <div className='addproduct-v2-image-productimage-with-title-main'>
                <div className='addproduct-v2-image-productimage-with-title-left'>
                    <input className='addproduct-v2-input' onChange={handleImageChange} type='file'/>
                    {imageURL && <img className='addproduct-v2-image-productimage-area' src={imageURL} alt=''/>}
                </div>
                <div className='addproduct-v2-image-productimage-with-title-right'>
                    {uploading_image?<span>Uploading</span>:<></>}
                    
                </div>
            </div>
            
            
            
        </div>
        <div className='addproduct-v2-image-productimage-with-title'>
            <p>Product Image</p>

            <div className='addproduct-v2-image-productimage-with-title-main'>
                <div className='addproduct-v2-image-productimage-with-title-left'>
                    <input onChange={handleProduct_imageChange} type='file'/>
                    {Product_imageURL && <img className='addproduct-v2-image-productimage-area' src={Product_imageURL} alt=''/>}
                </div>
                <div className='addproduct-v2-image-productimage-with-title-right'>
                    {uploading_Product_image?<span>Uploading</span>:<></>}
                    
                </div>
            </div>
            
            
        </div>
    </div>

    <div className="addproduct-v2-itemfield">
        <p>Owner Name</p>
        <input value={productDetails.owner_name} onChange={changeHandler} type='text' name='owner_name' placeholder='Type here' />
    </div>

    <div className='addproduct-v2-owner-image-with-title'>
        <p>Owner Image</p>
        <div className='addproduct-v2-image-productimage-with-title-main'>
            <div className='addproduct-v2-image-productimage-with-title-left'>
                <input onChange={handleOwner_imageChange} type='file'/>
                {owner_imageURL && <img className='addproduct-v2-image-productimage-with-title-left-image-area' src={owner_imageURL}  alt=''/>}
            </div>
            <div className='addproduct-v2-image-productimage-with-title-right'>
                {uploading_owner_image?<span>Uploading</span>:<></>}
                
            </div>
        </div>

        
        
    </div>

    <div className="addproduct-v2-itemfield">
        <p>Course Details</p>
        <input value={productDetails.product_details} onChange={changeHandler} type='text' name='product_details' placeholder='Type here' />
    </div>

    <div className='add-success-btn-area'>
        <button onClick={()=>{Add_Product()}} className='addproduct-v2-btn'>{addText}</button>

        {
        addText==='ADDED SUCCESS'
        ?<button onClick={handleRefresh} className='addproduct-v2-btn'>ADD NEW</button>
        :null
        }  
    </div>

</div>
  )
}

export default AddProductv4