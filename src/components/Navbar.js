import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => { 

    const toggleMenu = () => {
        let input = document.getElementById("nav-burger-check")
        input.checked = false;
    }

    return (
        <div className = "nav">
            <input id = "nav-burger-check" type = "checkbox"/>
            
            <label htmlFor = "nav-burger-check" className = "nav-burger-toggle">
                <div className = "nav-burger"></div>
            </label>
            
            <nav className = "nav-menu">
                <ul onClick={toggleMenu}>
                   <li><Link to = "/">About Me</Link></li>  
                   <li><Link to = "/work">My Work</Link></li> 
                   <li><Link to = "/contact">Contact</Link></li> 
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
