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
            <input 
                onChange={(e) => document.body.style.overflowY = e.target.checked?"hidden":"unset"}
                id = "nav-burger-check" type = "checkbox"/>
            
            <label htmlFor = "nav-burger-check" className = "nav-burger-toggle">
                <div className = "nav-burger"></div>
            </label>
            
            <nav className = "nav-menu">
                <ul onClick={toggleMenu}>
                   <li><Link to = "/">About Me</Link></li>  
                   <li><Link to = "/work">My Work</Link></li> 
                   <li><Link to = "/contact">Contact</Link></li> 
                </ul>
                
                <div className="links">
                    <div className="github-icon">
                        <a target="_blank" href = "https://github.com/AlomerovicKarim47"></a>
                    </div>
                    <div className="cv-icon">
                        <a target='_blank' href = "/files/cv.pdf">CV</a>
                    </div>
                </div>
                
            </nav>

            
        </div>
    );
}

export default Navbar;
