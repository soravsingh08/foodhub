import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {

 const [loginBtn, setLoginBtn] = useState("Login")
  return (
   <>
   <div className="navbar">
    <div className="logo">
        <h1>food<span>hub</span>.</h1>
    </div>
    <div className="content">
        <ul>
          <li> <Link to = "/">Home</Link></li>
            <li> <Link to = "/about">About Us</Link></li>
              <li> <Link to ="/services">Services</Link></li>
            <li> <Link to ="/contact-us">Contact Us</Link></li>
         
        </ul>
       <button className='loginBtn' onClick={()=>(setLoginBtn(loginBtn === "Login" ? "Logout" : "Login"))}>{loginBtn}</button>
    </div>
   </div>
   
   </>
  )
}

export default Header