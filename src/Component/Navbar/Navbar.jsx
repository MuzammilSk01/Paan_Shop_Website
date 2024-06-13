// import React from 'react'
import { useState, useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../StoreContext/StoreContext'
import './Navbar.css'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home")
  const { getTotalCartAmount } = useContext(StoreContext)


  return (
    <div className="navbar">
      <Link to='/'><img src={assets.Logo} alt="logo" className='logo' /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("Product")} className={menu === "Product" ? "active" : ""}>Product</a>
        <a href='#About' onClick={() => setMenu("About")} className={menu === "About" ? "active" : ""}>About</a>
        <a href='#Contact' onClick={() => setMenu("Contact")} className={menu === "Contact" ? "active" : ""}>Contact</a>
      </ul>
      <div className='navbar-right'>
        <span className='bi bi-search'></span>
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign Up</button>
      </div>

    </div>
  )
}

export default Navbar
