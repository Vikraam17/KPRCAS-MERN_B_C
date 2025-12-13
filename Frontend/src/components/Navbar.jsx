import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/useState">useState</Link></li>
                <li><Link to="/useEffect">useEffect</Link></li>
            </ul>
        </nav>
    </div>
  )
}
export default Navbar