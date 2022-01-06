import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-color'>
            <div className='container'>
            <nav>
                <ul className='navbar'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/main">Main</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
             </nav>
            </div>
        </div>
    )
}

export default Navbar
