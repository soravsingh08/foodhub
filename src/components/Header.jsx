import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'
import { ShoppingCart } from "lucide-react";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login")
  const data = useContext(UserContext)
  
  // Subscribing to store
  const cartItems = useSelector((store) => store.cart.items)

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>food<span>hub</span>.</h1>
        </Link>
      </div>
      
      <div className="content">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li>
            <Link to="/cart" className="nav-cart-link">
              <div className="cart-icon-container">
                <ShoppingCart size={22} strokeWidth={2.5} />
                {cartItems.length > 0 && (
                  <span className="cart-count-badge">{cartItems.length}</span>
                )}
              </div>
            </Link>
          </li>
        </ul>
        <button 
          className='loginBtn' 
          onClick={() => setLoginBtn(loginBtn === "Login" ? "Logout" : "Login")}
        >
          {loginBtn}
        </button>
      </div>
    </div>
  )
}

export default Header