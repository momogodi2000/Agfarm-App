import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Home from './auth/Home';
import About from './auth/home/About';
import Contact from './auth/home/Contact';
import ForgetPassword from './auth/ForgetPassword';
import FarmerDashboard from './panel/FarmerDashboard';
import BuyerDashboard from './panel/BuyerDashboard';
import AdminDashboard from './panel/AdminDashboard';
import FinancialDashboard from './panel/FinancialDashboard';
import GovernmentDashboard from './panel/GovernmentDashboard';
import LogisticsDashboard from './panel/LogisticsDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/financial-dashboard" element={<FinancialDashboard />} />
        <Route path="/government-dashboard" element={<GovernmentDashboard />} />
        <Route path="/logistics-dashboard" element={<LogisticsDashboard />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
