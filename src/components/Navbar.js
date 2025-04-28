import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null); // 🆕 Buat referensi ke navbar
  const location = useLocation(); // Mendapatkan lokasi halaman aktif

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🆕 Close menu kalau klik di luar navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} ref={navRef}>
      <h2 className="logo">AstreviX</h2>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li>
          <Link 
            to="/" 
            onClick={() => setMenuOpen(false)} 
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            onClick={() => setMenuOpen(false)} 
            className={location.pathname === '/about' ? 'active' : ''}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/mission" 
            onClick={() => setMenuOpen(false)} 
            className={location.pathname === '/mission' ? 'active' : ''}
          >
            Mission
          </Link>
        </li>
        <li>
          <Link 
            to="/technology" 
            onClick={() => setMenuOpen(false)} 
            className={location.pathname === '/technology' ? 'active' : ''}
          >
            Technology
          </Link>
        </li>
        <li>
          <Link 
            to="/join-us" 
            onClick={() => setMenuOpen(false)} 
            className={location.pathname === '/join-us' ? 'active' : ''}
          >
            Join Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
