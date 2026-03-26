import { Link, useLocation, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import './Navbar.css'
import { IoMdMenu } from "react-icons/io";
import {IoMdClose} from "react-icons/io";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

  return (
    <div className="navbar">
        <div className="logo" onClick={() => {navigate('/'); setIsMenuOpen(false)}}>
            <img src="https://www.buyerforesight.com/wp-content/uploads/2025/09/BF-logo-white.png" alt="BuyerForeSight" className='img-logo'/>
        </div>
        <div className='menu-container'>

            {isMenuOpen ? (
                <IoMdClose className='menu-icon' onClick={() => setIsMenuOpen(false)} />
            ) : (
                <IoMdMenu className='menu-icon' onClick={() => setIsMenuOpen(true)} />
            )}
         
            </div>
            <ul className="web-menu">
                <li ><Link className={location.pathname === '/' ? 'nav-link active' : 'nav-link'} to="/">Home</Link></li>
                <li><Link className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'} to="/about">About</Link></li>
                <li><Link className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'} to="/contact">Contact</Link></li>
            </ul>

           {isMenuOpen && (
            <ul className="mobile-menu">
                <li onClick={() => setIsMenuOpen(false)}><Link className={location.pathname === '/' ? 'nav-link active' : 'nav-link'} to="/">Home</Link></li>
                <li onClick={() => setIsMenuOpen(false)}><Link className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'} to="/about">About</Link></li>
                <li onClick={() => setIsMenuOpen(false)}><Link className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'} to="/contact">Contact</Link></li>
            </ul>
           )}
        
    </div>
  )
}

export default Navbar