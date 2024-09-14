import React, { useState } from 'react';
import './header.css'; // Import the CSS file for styling
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaSnapchatGhost } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SiX } from 'react-icons/si'; // Example for X (Twitter) icon
import Logo from '../../lul_logo2.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-image" />
      </div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
          ☰ 
        </button>
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item"><a href="#about" className="nav-link">ABOUT</a></li>
          <li className="nav-item"><a href="#teams" className="nav-link">TEAMS</a></li>
          <li className="nav-item"><a href="#players" className="nav-link">PLAYERS</a></li>
          <li className="nav-item"><a href="#schedule" className="nav-link">SCHEDULE</a></li>
          <li className="nav-item"><a href="#seasons" className="nav-link">SEASONS</a></li>
          <li className="nav-item"><a href="#gallery" className="nav-link">GALLERY</a></li>
        </ul>
      </nav>
      <div className="social-media">
        <a href="https://www.facebook.com" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
        <a href="https://www.twitter.com" className="social-icon" aria-label="X"><SiX /></a>
        <a href="https://www.instagram.com" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
        <a href="https://www.youtube.com" className="social-icon" aria-label="YouTube"><FaYoutube /></a>
        <a href="https://www.tiktok.com" className="social-icon" aria-label="TikTok"><FaTiktok /></a>
        <a href="https://www.snapchat.com" className="social-icon" aria-label="Snapchat"><FaSnapchatGhost /></a>
        <a href="mailto:example@example.com" className="social-icon" aria-label="Email"><HiOutlineMail /></a>
      </div>
    </header>
  );
};

export default Header;
