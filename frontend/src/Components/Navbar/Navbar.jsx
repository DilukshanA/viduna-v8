import React, { useContext, useEffect, useRef, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import user from '../Assets/user.png'
import logout_icon from '../Assets/logout_icon.png'

import toggle_light from '../Assets/toggle_light.png'
import {Link} from 'react-router-dom'
import cart_icon from '../Assets/cart_icon.png'
import nav_dropdown from '../Assets/nav_dropdown.png'

import nav_dropdown_close from '../Assets/nav_dropdown_close.png'
import toggle_dark from '../Assets/toggle_dark.png'

import edit_profile_icon from '../Assets/edit_profile_icon.png'
import user_sub_icon from '../Assets/user_sub_icon.png'
import inbox_icon from '../Assets/inbox_icon.png'
import settings_icon from '../Assets/settings_icon.png'
import help_icon from '../Assets/help_icon.png'

import { CourseContext } from '../../Context/CourseContext'


const Navbar = ({theme, setTheme}) => {

  const  {currentUserData} = useContext(CourseContext);


  const [openSubMenu, setOpenSubMenu] = useState(false);
  
  let subMenuRef = useRef();


  useEffect(()=>{
    let subMenuHandler = (e)=> {
      if(!subMenuRef.current.contains(e.target)){
        setOpenSubMenu(false);
        //console.log(subMenuRef.current);
      }
      
    };
    document.addEventListener("mousedown", subMenuHandler);

    return()=>{
      document.removeEventListener("mousedown", subMenuHandler);
    }
  });

  const [menuIcon , setMenuIcon] = useState('nav-menu-visible');

  const toggle_mode = ()=> {
    theme == 'dark' ? setTheme('light') : setTheme('dark');
  }

  const [menu, setMenu] = React.useState(false);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
    menuIcon == 'nav-menu-visible' ? setMenuIcon('open') : setMenuIcon('nav-menu-visible');
  }


  const [sticky, setSticky] = useState(false);

{/* when scrolling color add to navbar */}
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])

  return (
    <div className={`navbar ${sticky? 'dark-nav':''}`}>

        <div className="nav-logo">
            <img src={logo} alt="" />

        </div>

        <img className='nav-dropdown' onClick={dropdown_toggle} src={menuIcon == 'nav-menu-visible' ? nav_dropdown : nav_dropdown_close} alt=''/>

        
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("courses")}}><Link style={{textDecoration:'none'}}  to='/courses'>Courses</Link>{menu==="courses"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration:'none'}}  to='/about'>About</Link>{menu==="about"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("contact us")}}><Link style={{textDecoration:'none'}}  to='/contact'>Contact</Link>{menu==="contact us"?<hr/>:<></>}</li>
            
        </ul>

        <ul ref={menuRef} className="nav-menu-mobile">
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("userprofile")}}>{localStorage.getItem('auth-token')?<Link to='/userprofile'>My Profile</Link>:<></>}{menu==="userprofile"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("courses")}}><Link style={{textDecoration:'none'}}  to='/courses'>Courses</Link>{menu==="courses"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("cart")}}><Link style={{textDecoration:'none'}}  to='/cart'>Cart</Link>{menu==="cart"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration:'none'}}  to='/about'>About</Link>{menu==="about"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("contact us")}}><Link style={{textDecoration:'none'}}  to='/contact'>Contact</Link>{menu==="contact us"?<hr/>:<></>}</li>
            {localStorage.getItem('auth-token')
            ?<li onClick={()=>{localStorage.removeItem('auth-token');
              window.location.replace('/');setMenu("login");}}><Link style={{textDecoration:'none'}}  to='/login'>Logout</Link>{menu==="login"?<hr/>:<></>}</li>
            :<li onClick={()=>{setMenu("login")}}><Link style={{textDecoration:'none'}}  to='/login'>Login</Link>{menu==="login"?<hr/>:<></>}</li>}
            
            <li onClick={()=>{toggle_mode()}}>{theme == 'light' ? "Dark Mode" : "Light Mode"}</li>
            
        </ul>


        <div className="nav-login-search-mode">
            
            <img onClick={()=>{toggle_mode()}} src = {theme == 'light' ? toggle_light : toggle_dark } alt=""/>
            <Link to='/cart'><img src={cart_icon} alt=""/></Link>
          {/** 
            {localStorage.getItem('auth-token')
            ?<img onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}} src={logout_icon} alt=''/>
            :<Link to='login'><img src={user} alt=""/></Link>}
          */}
              {/** 
            <Link><img onClick={()=>{setOpenSubMenu(!openSubMenu)}} src={user} alt=""/></Link>
            */}
            {localStorage.getItem('auth-token')
            ?<Link><img onClick={()=>{setOpenSubMenu(!openSubMenu)}} src={user} alt=""/></Link>
            :<Link to='login'><img src={user} alt=""/></Link>}
        </div>
        
        <div  ref={subMenuRef} className={`sub-menu-wrap ${openSubMenu?'active':'inactive'}`}>
          <div className='sub-menu-wrap-head'>
            <h3>{currentUserData.name}</h3>
            <span>{currentUserData.email}</span>
          </div>
          
          <ul>
            <Link to='/userprofile'><DropdownItem img={user_sub_icon} text='My Profile'/></Link>
            <DropdownItem img={edit_profile_icon} text='Edit Profile'/>
            <DropdownItem img={inbox_icon} text='Inbox'/>
            <DropdownItem img={settings_icon} text='Settings'/>
            <DropdownItem img={help_icon} text='Help'/>
            
          </ul>
          <button className='sub-menu-wrap-btn' onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Log Out</button>
        </div>


        
    </div>
  )
}

function DropdownItem(props){
  return(
    <li className='sub-menu'>
      <img src={props.img}></img>
      <a>{props.text}</a>
    </li>
  )
}

export default Navbar