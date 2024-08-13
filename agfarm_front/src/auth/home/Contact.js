import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Contact.css';
import agfarmLogo from '../../images/logo/logo.jpeg';
import axios from '../../js/axiosConfig';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/contact/', formData);
      console.log('Form submitted:', response.data);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error.response?.data || error.message);
    }
  };
  

  return (
    <div className="contact-container">
      <header className="headers">
        <img src={agfarmLogo} alt="AgFarm Logo" className="logo" />
        <nav className="nav">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
        </nav>
      </header>
      <main className="main-content">
        <section className="contact-section">
          <h1>Contact Us</h1>
          <p>Have any questions or need further information? Reach out to us and we'll be happy to assist you.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 AgFarm. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
