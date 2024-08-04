import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import About from './Pages/About';
import Contact from './Pages/Contact';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';


import CourseCategory from './Pages/CourseCategory';
import Cart from './Pages/Cart';
import UserProfile from './Components/UserProfile/UserProfile';
import { UpdateUser } from './Components/UpdateUser/UpdateUser';







function App() {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme :'light');

  useEffect(()=>{
    localStorage.setItem('current_theme',theme);
  },[theme])


  return (
    <div className={`container ${theme}`}>
      <BrowserRouter>
      <Navbar theme={theme} setTheme={setTheme}/>
      
      
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>

        <Route path='/ict' element={<CourseCategory category='Information Technology'/>}/>
        <Route path='/mathematics' element={<CourseCategory category='Mathematics'/>}/>
        <Route path='/physics' element={<CourseCategory category='Physics'/>}/>
        <Route path='/chemistry' element={<CourseCategory category='Chemistry'/>}/>
        <Route path='/graphicdesign' element={<CourseCategory category='Graphic Design'/>}/>
        <Route path='/softwaredevelopment' element={<CourseCategory category='Software Development'/>}/>

        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>

        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/updateuser' element={<UpdateUser/>}/>
        </Routes>
        <Footer/>
        
        
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
