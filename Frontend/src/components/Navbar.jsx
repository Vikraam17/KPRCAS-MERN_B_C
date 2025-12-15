import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <ul className='ul'>
                <li><Link className='link' to="/">Home</Link></li>
                <li><Link className='link' to="/about">About</Link></li>
                <li><Link className='link' to="/contact">Contact</Link></li>
                <li><Link className='link' to="/service">Service</Link></li>
                <li><Link className='link' to="/useState">useState</Link></li>
                <li><Link className='link' to="/useEffect">useEffect</Link></li>
                <li><Link className='link' to="/form">form</Link></li>
                <li><Link className='link' to="/todo">Todo</Link></li>
            </ul>
        </nav>
    </div>
  )
}
export default Navbar