import React, { useState, useEffect } from 'react';
import Logout from '../components/Logout';
import { FaHome, FaBox, FaUser, FaCog, FaComments, FaSignOutAlt } from 'react-icons/fa';
import '../css/Dashboard.css';

const BuyerDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('home');
  const [username, setUsername] = useState(''); // State to store username

  useEffect(() => {
    // Function to fetch user data
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user'); // Replace with your API endpoint
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setUsername(data.username); // Assuming the API returns { username: '...' }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array means this runs once when the component mounts

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    toggleMenu(); // Close the menu after selecting an option
  };

  const getTitle = (menu) => {
    if (typeof menu === 'string') {
      return menu.charAt(0).toUpperCase() + menu.slice(1);
    }
    return 'Home'; // Fallback title if menu is not a string
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
            <li className={activeMenu === 'orders' ? 'active' : ''} onClick={() => handleMenuClick('orders')}>
              <FaBox /> <span>Orders</span>
            </li>
            <li className={activeMenu === 'profile' ? 'active' : ''} onClick={() => handleMenuClick('profile')}>
              <FaUser /> <span>Profile</span>
            </li>
            <li className={activeMenu === 'chat' ? 'active' : ''} onClick={() => handleMenuClick('chat')}>
              <FaComments /> <span>Chat</span>
            </li>
            <li className={activeMenu === 'settings' ? 'active' : ''} onClick={() => handleMenuClick('settings')}>
              <FaCog /> <span>Settings</span>
            </li>
            <li className="logout" onClick={() => handleMenuClick('logout')}>
              <FaSignOutAlt /> <span>Logout</span>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="main-content">
        <header className="dashboard-header">
          <h1>Buyer Dashboard</h1>
          <p>Welcome, {username}</p>
        </header>
        <main className="dashboard-content">
          <section className="buyer-info">
            <h2>Your {getTitle(activeMenu)}</h2>
            <p>
              {activeMenu === 'home' && 'Here is your dashboard overview.'}
              {activeMenu === 'orders' && 'Manage your orders and view order history.'}
              {activeMenu === 'profile' && 'View and update your profile information.'}
              {activeMenu === 'chat' && 'Chat with the logistics.'}
              {activeMenu === 'settings' && 'Adjust your account settings and preferences.'}
              {activeMenu === 'logout' && <Logout />}
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default BuyerDashboard;
