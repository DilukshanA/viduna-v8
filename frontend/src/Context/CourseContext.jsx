import React, {createContext, useEffect, useState} from "react";
//import all_courses from "../Components/Assets/all_courses";

export const CourseContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let index = 0 ; index < 300+1; index++){
        cart[index] = 0;
    }
    return cart;
}

const CourseContextProvider = (props) => {

    // current user data get
    const [currentUserData, setCurrentUserData] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
          const token = localStorage.getItem('auth-token');
    
          const response = await fetch('http://localhost:4000/getcurrentuserdata',{
            method:'POST',
            headers: {
              'content-type':'application/json',
              'auth-token':token,
            }
          });
          if(response.ok){
            const data = await response.json();
            setCurrentUserData(data);
          }else{
            console.log('Error fetching current user data');
          }
        };
        fetchData();
      },[]);

      // all course data
 
    const [all_courses,setAll_courses] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_courses(data))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart', {
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            }).then((response)=>response.json())
            .then((data)=>setCartItems(data));
        }
    },[])

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            // Check if the item is already in the cart
            if (prev[itemId]) {
                // If the item is already in the cart, return the previous state
                window.alert('Item is already in your cart');
                return prev;
            } else {
                // If the item is not in the cart, add it
                const newCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
    
                // Make the fetch call only if the item is not already in the cart
                if (localStorage.getItem('auth-token')) {
                    fetch('http://localhost:4000/addtocart', {
                        method: 'POST',
                        headers: {
                            Accept: 'application/form-data',
                            'auth-token': `${localStorage.getItem('auth-token')}`,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ itemId }),
                    })
                    .then((response) => response.json())
                    .then((data) => console.log(data));
                }
    
                return newCart;
            }
        });
    };
    
    /*
    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
       // console.log(cartItems);
       if(localStorage.getItem('auth-token')){
        fetch('http://localhost:4000/addtocart',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'auth-token': `${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json',
            },
            body:JSON.stringify({"itemId":itemId}),
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data));
       }
    }
       */

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
        
    }
    
    const getTotalCartAmount = ()=> {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_courses.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.price * cartItems[item] ;
            }
            
        }
        return totalAmount;
    }

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue ={currentUserData,getTotalCartItems, getTotalCartAmount, all_courses, cartItems, addToCart , removeFromCart};

    return(
        <CourseContext.Provider value={contextValue}>
            {props.children}
        </CourseContext.Provider>
    )
}

export default CourseContextProvider;