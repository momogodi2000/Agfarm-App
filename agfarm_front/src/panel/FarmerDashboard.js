import React, { useState } from 'react';
import Logout from '../components/Logout';
import { FaHome, FaTasks, FaCalendar, FaBox, FaCreditCard, FaForumbee, FaSignOutAlt } from 'react-icons/fa'; // Removed FaUser and replaced FaSignOut with FaSignOutAlt
import '../css/Farmer.css';

const FarmerDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('home');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">
          <h2>Farmer<span>Dash</span></h2>
        </div>
        <nav className="menu">
          <ul>
            <li className={activeMenu === 'home' ? 'active' : ''} onClick={() => handleMenuClick('home')}>
              <FaHome /> <span>Home</span>
            </li>
            <li className={activeMenu === 'tasks' ? 'active' : ''} onClick={() => handleMenuClick('tasks')}>
              <FaTasks /> <span>Tasks</span>
            </li>
            <li className={activeMenu === 'product' ? 'active' : ''} onClick={() => handleMenuClick('product')}>
              <FaBox /> <span>Product</span>
            </li>
            <li className={activeMenu === 'command' ? 'active' : ''} onClick={() => handleMenuClick('command')}>
              <FaCreditCard /> <span>Command</span>
            </li>
            <li className={activeMenu === 'finance' ? 'active' : ''} onClick={() => handleMenuClick('finance')}>
              <FaCreditCard /> <span>Finance</span>
            </li>
            <li className={activeMenu === 'forum' ? 'active' : ''} onClick={() => handleMenuClick('forum')}>
              <FaForumbee /> <span>Forum</span>
            </li>
            <li className={activeMenu === 'calendar' ? 'active' : ''} onClick={() => handleMenuClick('calendar')}>
              <FaCalendar /> <span>Calendar</span>
            </li>
            <li className="logout" onClick={() => handleMenuClick('logout')}>
              <FaSignOutAlt /> <span>Logout</span>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="content">
        <h1>Farmer Dashboard</h1>
        <p>Welcome, [Username]</p>
        <div className="active-content">
          {/* Content based on the active menu */}
          {activeMenu === 'home' && <div>Home Content</div>}
          {activeMenu === 'product' && <div>Product Content</div>}
          {activeMenu === 'command' && <div>Command Content</div>}
          {activeMenu === 'finance' && <div>Finance Content</div>}
          {activeMenu === 'profile' && <div>Profile Content</div>}
          {activeMenu === 'forum' && <div>Forum Content</div>}
          {activeMenu === 'calendar' && <div>Calendar Content</div>}
          {activeMenu === 'logout' && <Logout />}
        </div>
      </main>
    </div>
  );
};

export default FarmerDashboard;
