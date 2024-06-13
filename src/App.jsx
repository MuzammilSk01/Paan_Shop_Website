// import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { Route, Routes } from "react-router-dom"
import Navbar from './Component/Navbar/Navbar';
import LoginPopUp from './Component/Loginpopup/LoginPopUp';
import { useState } from 'react';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Order from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Component/Footer/Footer';

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/Order' element={<Order/>}/>
       </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App
