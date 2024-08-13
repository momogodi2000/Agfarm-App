import React, { useState } from 'react';
import { FaHome, FaTruck, FaBoxes, FaMapMarkedAlt, FaSignOutAlt } from 'react-icons/fa';
import Logout from '../components/Logout';
import '../css/Dashboard.css';

const LogisticDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    toggleMenu(); // Close the menu after selecting an option
  };

  return (
    <div className="dashboard-container">
      <aside className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="toggle-icon">&#9776;</span>
        </div>
        <nav className="menu">
          <ul>
            <li className={activeMenu === 'home' ? 'active' : ''} onClick={() => handleMenuClick('home')}>
              <FaHome /> <span>Home</span>
            </li>
            <li className={activeMenu === 'shipments' ? 'active' : ''} onClick={() => handleMenuClick('shipments')}>
              <FaTruck /> <span>Shipments</span>
            </li>
            <li className={activeMenu === 'inventory' ? 'active' : ''} onClick={() => handleMenuClick('inventory')}>
              <FaBoxes /> <span>Inventory</span>
            </li>
            <li className={activeMenu === 'tracking' ? 'active' : ''} onClick={() => handleMenuClick('tracking')}>
              <FaMapMarkedAlt /> <span>Tracking</span>
            </li>
            <li onClick={handleMenuClick}>
              <FaSignOutAlt /> <span>Logout</span>
              <Logout />
            </li>
          </ul>
        </nav>
      </aside>
      <div className="main-content">
        <header className="dashboard-header">
          <h1>Logistic Dashboard</h1>
        </header>
        <main className="dashboard-content">
          <section className="dashboard-info">
            <h2>Your {activeMenu.charAt(0).toUpperCase() + activeMenu.slice(1)}</h2>
            <p>
              {activeMenu === 'home' && 'Here is your dashboard overview.'}
              {activeMenu === 'shipments' && 'Manage and view shipments.'}
              {activeMenu === 'inventory' && 'Manage and view inventory.'}
              {activeMenu === 'tracking' && 'Track shipments and deliveries.'}
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default LogisticDashboard;
