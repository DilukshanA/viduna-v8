import React, { useEffect, useState } from 'react'
import './ProductUpdate.css'
import { useLocation } from 'react-router-dom'

import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage'
import app from '../../../firebase';

const ProductUpdate = () => {

    const location = useLocation();
    const [id, setId] = useState('');
    const [course_name,setCourse_name] = useState('');
    const [price,setPrice] = useState('');
    const [course_level,setCourse_level] = useState('');
    const [category,setCategory] = useState('');
    const [owner_name,setOwner_name] = useState('');
    const [product_details,setProduct_details] = useState('');
    const [image,setImage] = useState('');
    const [Product_image,setProduct_image] = useState('');
    const [owner_logo,setOwner_logo] = useState('');

    

    useEffect(()=>{
        console.log("location.state===",location.state);
        setId(location.state.id);
        setCourse_name(location.state.course_name);
        setPrice(location.state.price);
        setCourse_level(location.state.course_level);
        setCategory(location.state.category);
        setOwner_name(location.state.owner_name);
        setProduct_details(location.state.product_details);
        setImage(location.state.image);
        setProduct_image(location.state.Product_image);
        setOwner_logo(location.state.owner_logo);

    },[]);


    const [imageURL , setImageURL] = useState('');
    const [uploading_image , setUploading_image] = useState(false);

    const [uploading_Product_image , setUploading_Product_image] = useState(false);
    const [Product_imageURL , setProduct_imageURL] = useState("");

    const [uploading_owner_image , setUploading_owner_image] = useState(false);
    const [owner_imageURL , setowner_imageURL] = useState("");

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


    const updateProduct = () => {
      console.log(course_name);


      fetch('http://localhost:4000/updateproduct',{
        method:"POST",
        crossDomain:true,
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
            id:location.state.id,
            course_name:course_name,
            price:price,
            course_level:course_level,
            category:category,
            image:imageURL?imageURL:image,
            Product_image:Product_imageURL?Product_imageURL:Product_image,
            owner_logo:owner_imageURL?owner_imageURL:owner_logo,
            owner_name:owner_name,
            product_details:product_details,

            
        }),
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        window.location.replace('/listproduct');
    })
    }


    /* Create by me start */


    /* Create by me end */




    


  return (
    <div className='product-update'>
      <h1>Update Course-{course_name}</h1>
        

        <div className="update-product-itemfield">
            <p>Course Name</p>
            <input onChange={(e)=>setCourse_name(e.target.value)} type='text' name='course_name' placeholder='Type here' defaultValue={course_name} />
        </div>

        <div className="update-product-price-level">
            <div className="update-product-itemfield">
                <p>Price</p>
                <input onChange={(e)=>setPrice(e.target.value)} type='text' name='price' placeholder='Type here' defaultValue={price} />
            </div>
            <div className="update-product-itemfield">
                <p>Course Level</p>
                <input onChange={(e)=>setCourse_level(e.target.value)} type='text' name='course_level' placeholder='Type here' defaultValue={course_level} />
            </div>
        </div>

        <div className="update-product-itemfield">
            <p>Course Category</p>
            
            <select onChange={(e)=>setCategory(e.target.value)} name='category' className='update-product-selector' defaultValue={category}>
                <option className='default-category' value={category}>{category}</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Software Development">Software Development</option>
            </select>
        </div>

        <div className='update-product-image-productimage-with-title'>
                <p className='image-head-title'>Cover Image</p>

                <div className='update-product-image-productimage-with-title-main'>
                    <div className='update-product-image-productimage-with-title-left'>
                        <input onChange={handleImageChange} className='update-product-input'  type='file' defaultValue={image}/>
                        {
                        imageURL
                        ?<img className='update-product-image-productimage-area' src={imageURL} alt=''/>
                        :<img className='update-product-image-productimage-area' src={image} alt=''/>
                        }
                        {/*{image && <img className='update-product-image-productimage-area' src={image} alt=''/>}
                        {imageURL && <img className='addproduct-v2-image-productimage-area' src={imageURL} alt=''/>}
                        */}
                    </div>
                    <div className='update-product-image-productimage-with-title-right'>
                        
                    </div>
                </div> 
        </div>

        <div className='update-product-image-productimage-with-title'>
                <p className='image-head-title'>Product Image</p>

                <div className='update-product-image-productimage-with-title-main'>
                    <div className='update-product-image-productimage-with-title-left'>
                        <input onChange={handleProduct_imageChange} type='file' defaultValue={Product_image}/>
                        {
                          Product_imageURL
                          ?<img className='update-product-image-productimage-area' src={Product_imageURL} alt=''/>
                          :<img className='update-product-image-productimage-area' src={Product_image} alt=''/>
                        }
                        
                        
                    </div>
                    <div className='update-product-image-productimage-with-title-right'>  
                    </div>
                </div>       
        </div>


        <div className="update-product-itemfield">
          
            <p>Owner Name</p>
            <input onChange={(e)=>setOwner_name(e.target.value)} type='text' name='owner_name' placeholder='Type here' defaultValue={owner_name} />
            
        </div>

        <div className='update-product-owner-image-with-title'>
            <p>Owner Image</p>
            <div className='update-product-image-productimage-with-title-main'>
                <div className='update-product-image-productimage-with-title-left'>
                    <input onChange={handleOwner_imageChange} type='file' defaultValue={owner_logo}/>
                    {
                      owner_imageURL
                      ?<img className='update-owner-image-area' src={owner_imageURL}  alt=''/>
                      :<img className='update-owner-image-area' src={owner_logo} alt=''/>
                    }
                    
                </div>
                <div className='update-product-image-productimage-with-title-right'>
                    
                </div>
            </div>    
        </div>

        <div className="update-product-itemfield">
          
            <p>Course Details</p>
            <input onChange={(e)=>setProduct_details(e.target.value)} type='text' name='product_details' placeholder='Type here' defaultValue={product_details} />
        </div>

        <button onClick={updateProduct} className='update-product-btn'>Update</button>



        {/* Create by me start */}


        {/* Create by me end */}



    </div>
  )
}

export default ProductUpdate