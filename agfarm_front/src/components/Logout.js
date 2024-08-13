import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "../js/axiosConfig";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Send a request to the backend to logout the user
      await axios.post('/api/logout/', null, {
        withCredentials: true, // Ensure cookies are sent with the request
      });

      // Clear any session data (e.g., tokens) from localStorage or cookies
      localStorage.removeItem('authToken');

      // Redirect the user to the sign-in page
      navigate('/signin');
    } catch (error) {
      console.error('Logout failed:', error);
      // Handle errors here (e.g., show a notification)
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
