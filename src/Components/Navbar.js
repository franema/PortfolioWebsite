import React from 'react'
import "../CSS/Navbar.css"
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className='navbar_container'>
            <div className='navbar'>
                <Link to="/">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar