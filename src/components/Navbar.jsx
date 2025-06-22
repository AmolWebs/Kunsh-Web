import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <div className="web-logo">
        <NavLink to="/" onClick={closeMenu}>
          <img className="nav-logo" src="kunsh-logo.svg" alt="Kunsh Masale" />
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <ul className='nav-links desktop-menu'>
        <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''} to='/'><li>Home</li></NavLink>
        <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''} to='/about-us'><li>About</li></NavLink>
        <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''} to='/products'><li>Products</li></NavLink>
        <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''} to='/product-details'><li>Product Details</li></NavLink>
        <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''} to='/history'><li>History</li></NavLink>
        <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''} to='/contact-us'><li>Contact Us</li></NavLink>
      </ul>

      {/* Mobile Slide Menu */}
      <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul className='nav-links mobile-menu'>
          <NavLink onClick={closeMenu} to='/'><li>Home</li></NavLink>
          <NavLink onClick={closeMenu} to='/about-us'><li>About</li></NavLink>
          <NavLink onClick={closeMenu} to='/products'><li>Products</li></NavLink>
          <NavLink onClick={closeMenu} to='/product-details'><li>Product Details</li></NavLink>
          <NavLink onClick={closeMenu} to='/history'><li>History</li></NavLink>
          <NavLink onClick={closeMenu} to='/contact-us'><li>Contact Us</li></NavLink>
        </ul>
      </div>

      <button className='order-btn'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="..." /></svg>
        Call For Order
      </button>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  );
};

export default Navbar;
