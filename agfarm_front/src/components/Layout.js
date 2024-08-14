import React from 'react';
import Header from './Header'; // Import the shared Header component
import '../css/global.css';
import '../css/js/headerScroll';



const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">{children}</main>
      <footer className="footer">
        <p>&copy; 2024 AgFarm. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
