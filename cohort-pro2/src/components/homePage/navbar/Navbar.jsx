import React from 'react'
import Logo from './navImg/ct.png'
import '../../../index.css'
import './navbar.css'

const Navbar = () => {
  return (
   <main>
    <nav className='row'>
      <div className="nav-container df">
          <img className='nav-logo' src={Logo} alt="" />

          <ul className='nav-menu df'>
            <li><a href="#HOME">HOME</a></li>
            <li><a href="#ABOUT">ABOUT</a></li>
            <li><a href="#COURSE">COURSE</a></li>
            <li><a href="#CONTACT">CONTACT</a></li>
          </ul>

            <button className="nav-btn btn">SIGN IN</button>
        </div>  
    </nav>

   </main>
  )
}

export default Navbar;