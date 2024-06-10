import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
  
const Navbar = () => {
  return (
    <nav className="navContainer">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'Blue' : ''}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/xpensr" className={({ isActive }) => isActive ? 'Blue' : ''}>Xpensr</NavLink>
        </li>
        <li>
          <NavLink to="/summary" className={({ isActive }) => isActive ? 'Blue' : ''}>Summary</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
