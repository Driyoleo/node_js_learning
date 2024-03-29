/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav>               
                    <NavLink to="/" className={(e)=>{return e.isActive? "red" : ""}}><li>home</li></NavLink>
                    <NavLink to="/About" className={(e)=>{return e.isActive? "red" : ""}}><li>about</li></NavLink>
                    <NavLink to="/Contact" className={(e)=>{return e.isActive? "red" : ""}}><li>contact</li></NavLink>                    
              
            </nav>
        </div>
    )
}

export default Navbar
