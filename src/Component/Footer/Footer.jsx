// import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className="footer-content-left">
            <img src={assets.Logo} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur earum saepe expedita delectus quis qui cumque natus voluptate accusamus rerum.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-770-983-1753</li>
                <li>contact@jantaPaan.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        Copyright  2024  ©  jantaPaanCenter.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
