import React, { useState, useEffect } from 'react';
import { FaHeart, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav_left">
        <div className="nav_logo">
          <h1>LazyLevel</h1>
        </div>
      </div>
      <div className={`nav_items ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/about'><li>About Us</li></Link>
          <Link><li>Shop</li></Link>
          <Link><li>T-shirts</li></Link>
          <Link><li>Pants</li></Link>
          <Link><li>Winterwears</li></Link>
          <Link to='/contact'><li>Contact</li></Link>
        </ul>
      </div>
      <div className="nav_icons">
        <Link to='/login'><p><FaUser /></p></Link>
        <Link to='/login'><p><FaHeart /></p></Link>
        <Link to='/login'><p><FaShoppingCart /></p></Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
