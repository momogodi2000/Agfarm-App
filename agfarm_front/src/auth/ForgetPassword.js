import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../js/axiosConfig';
import '../css/ForgetPassword.css';
import logo from '../images/logo/logo.jpeg';
import formImage from '../images/auth.jpeg';

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // Step 1: Request OTP, Step 2: Reset Password
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRequestOtp = async () => {
    try {
      const response = await axios.post('/api/forgot-password/', { email });
      setMessage(response.data.message);
      setStep(2); // Move to the next step to reset the password
    } catch (error) {
      setMessage(error.response?.data?.error || 'Something went wrong. Please try again.');
    }
  };

  const handleResetPassword = async () => {
    try {
      const response = await axios.put('/api/forgot-password/', {
        email,
        otp,
        new_password: newPassword,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-image">
        <img src={formImage} alt="Forgot Password" />
      </div>
      <div className="forgot-password-form">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Forgot Password</h2>
        {message && <p className="message">{message}</p>}
        {step === 1 ? (
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
            <button onClick={handleRequestOtp} className="btn">
              Request OTP
            </button>
          </div>
        ) : (
          <div className="form-group">
            <label>OTP:</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter the OTP"
            />
            <label>New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your new password"
            />
            <button onClick={handleResetPassword} className="btn">
              Reset Password
            </button>
          </div>
        )}
        <div className="links">
          <p>
            Remembered your password? <Link to="/signin">Sign In</Link>
          </p>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
