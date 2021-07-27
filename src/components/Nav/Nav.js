import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';




const Nav = () => {

    return (

        <div className="nav-bar">
            <NavLink to="/">About Me</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contact">Contact Me</NavLink>
        </div>

        
        
    )
}

export default Nav
