import React from 'react';
import { Link } from 'react-router-dom';
import agfarmLogo from '../images/logo/logo.jpeg'; // Assuming images folder is in the same directory

const Header = () => {
  return (
    <header className="header">
      <img src={agfarmLogo} alt="AgFarm Logo" className="logo" />
      <nav className="nav">
        <Link to="/home" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About Us
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
