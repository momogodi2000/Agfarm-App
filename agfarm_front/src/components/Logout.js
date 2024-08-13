import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "../js/axiosConfig";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Retrieve the token from localStorage (or wherever you store it)
      const token = localStorage.getItem('authToken');

      // Send a request to the backend to logout the user, including the token in the headers
      await axios.post('/api/logout/', null, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
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
