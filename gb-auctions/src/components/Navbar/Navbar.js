import React, { useState,useEffect } from "react";
import "./Navbar.css";
import { Menu } from "react-feather";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
 
  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
    console.log("clicked")
  };
  return (
    <div className="top-navbar">
      <nav className="max-width">
        <div className="top-navbar-right">
          <NavLink to="/">
            <img src="/Images/logo-02 (1).svg" alt="" />
          </NavLink>
          <div className="togggle-bar" onClick={toggleNavbar}>
            <Menu fontSize={50} />
          </div>
        </div>
        <div className={`top-navbar-center ${showNavbar && "active"}`}>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active1' : '')}>Home</NavLink>
          <NavLink to="/auction" className={({ isActive }) => (isActive ? 'active1' : '')}>Auction</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active1' : '')}>About Us</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active1' : '')}>Contact</NavLink>
        </div>
        <div className="top-navbar-left">
          <NavLink to="/login">
            <button>Login</button>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
