import React, { useState } from 'react';
import { FaHome, FaWallet, FaMoneyBillWave, FaChartLine, FaSignOutAlt } from 'react-icons/fa';
import Logout from '../components/Logout';
import '../css/Dashboard.css';

const FinancialDashboard = () => {
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
            <li className={activeMenu === 'transactions' ? 'active' : ''} onClick={() => handleMenuClick('transactions')}>
              <FaWallet /> <span>Transactions</span>
            </li>
            <li className={activeMenu === 'billing' ? 'active' : ''} onClick={() => handleMenuClick('billing')}>
              <FaMoneyBillWave /> <span>Billing</span>
            </li>
            <li className={activeMenu === 'reports' ? 'active' : ''} onClick={() => handleMenuClick('reports')}>
              <FaChartLine /> <span>Reports</span>
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
          <h1>Financial Dashboard</h1>
        </header>
        <main className="dashboard-content">
          <section className="dashboard-info">
            <h2>Your {activeMenu.charAt(0).toUpperCase() + activeMenu.slice(1)}</h2>
            <p>
              {activeMenu === 'home' && 'Here is your dashboard overview.'}
              {activeMenu === 'transactions' && 'Manage and view transactions.'}
              {activeMenu === 'billing' && 'Handle billing and invoices.'}
              {activeMenu === 'reports' && 'View financial reports.'}
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default FinancialDashboard;
