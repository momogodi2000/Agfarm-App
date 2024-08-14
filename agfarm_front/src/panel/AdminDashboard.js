import React, { useState } from 'react';
import { FaHome, FaUsers, FaTasks, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Logout from '../components/Logout';
import '../css/Dashboard.css';

const AdminDashboard = () => {
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
            <li className={activeMenu === 'users' ? 'active' : ''} onClick={() => handleMenuClick('users')}>
              <FaUsers /> <span>Users</span>
            </li>
            <li className={activeMenu === 'tasks' ? 'active' : ''} onClick={() => handleMenuClick('tasks')}>
              <FaTasks /> <span>Tasks</span>
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
          <h1>Admin Dashboard</h1>
        </header>
        <main className="dashboard-content">
          <section className="dashboard-info">
            <h2>Your {activeMenu.charAt(0).toUpperCase() + activeMenu.slice(1)}</h2>
            <p>
              {activeMenu === 'home' && 'Here is your dashboard overview.'}
              {activeMenu === 'users' && 'Manage and view user accounts.'}
              {activeMenu === 'tasks' && 'Assign and track tasks.'}
              {activeMenu === 'settings' && 'Adjust system settings.'}
              {activeMenu === 'logout' && <Logout />}
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
