import React from "react";
import {NavLink } from "react-router-dom";
import "../index.css"
  
const Navbar = () => {
  return (
    <nav className="navContainer">
   <NavLink to="/" className={(e)=> {return e.isActive?'Blue':''}}> <li>Home</li> </NavLink>
   <NavLink to="/xpensr" className={(e)=> {return e.isActive?'Blue':''}}> <li></li>Xpensr </NavLink>
   <NavLink to="/summary" className={(e)=> {return e.isActive?'Blue':''}}> <li></li>Summary</NavLink>
     </nav>
   );
};

export default Navbar;

 