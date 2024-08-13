import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import agfarmLogo from '../images/logo/logo.jpeg';
import heroImage from '../images/farm3.jpeg';
import cameroonAgricultureImage from '../images/farm2.jpeg';
import farmerMarketImage from '../images/farm.jpeg';
import farmerAdviceImage from '../images/farm4.jpeg';
import farmerFinanceImage from '../images/farm2.jpeg';
import farmerCommunityImage from '../images/farm5.jpeg';

const Home = () => {
  useEffect(() => {
    const heroText = document.querySelector('.hero-text');
    const features = document.querySelectorAll('.feature-card');
    const caseStudy = document.querySelector('.case-study-section');

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    features.forEach(feature => observer.observe(feature));
    observer.observe(caseStudy);
    heroText.classList.add('show');
  }, []);

  return (
    <div className="home-container">
      <header className="header1">
        <img src={agfarmLogo} alt="AgFarm Logo" className="logo" />
        <nav className="nav">
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </header>
      <main className="main-content">
        <div className="hero-section">
          <img src={heroImage} alt="Cameroon Farmer" className="hero-image" />
          <div className="hero-overlay"></div>
          <div className="hero-text">
            <h1>Empowering the Future of Agriculture in Cameroon</h1>
            <p>AgFarm: Your gateway to a brighter future for your farm.</p>
            <Link to="/signup" className="cta-button">Join the AgFarm Revolution</Link>
          </div>
        </div>
        <section className="features-section">
          <h2>Unlocking Opportunities for Rural Farmers</h2>
          <div className="feature-card">
            <img src={farmerMarketImage} alt="Farmer Market" className="feature-image" />
            <h3>Fairer Prices & Wider Markets</h3>
            <p>Connect directly with buyers and get better prices for your crops.</p>
          </div>
          <div className="feature-card">
            <img src={farmerAdviceImage} alt="Farmer Advice" className="feature-image" />
            <h3>Expert Agricultural Knowledge</h3>
            <p>Access valuable advice on farming practices and crop management.</p>
          </div>
          <div className="feature-card">
            <img src={farmerFinanceImage} alt="Farmer Finance" className="feature-image" />
            <h3>Financial Tools for Growth</h3>
            <p>Explore loan options, insurance, and savings plans to invest in your farm.</p>
          </div>
          <div className="feature-card">
            <img src={farmerCommunityImage} alt="Farmer Community" className="feature-image" />
            <h3>Thrive in a Supportive Community</h3>
            <p>Connect with other farmers, share experiences, and learn from each other.</p>
          </div>
        </section>
        <section className="case-study-section">
          <h2>Transforming Agriculture in Cameroon's Rural Areas</h2>
          <p>
            Imagine a future where rural Cameroonian farmers have the tools and resources they need
            to thrive. AgFarm is making that vision a reality. We empower farmers by:
          </p>
          <ul>
            <li>Connecting them directly to markets, eliminating middlemen and increasing profits.</li>
            <li>Providing real-time market data and insights to make informed decisions.</li>
            <li>Offering access to agricultural experts for improved farming techniques.</li>
            <li>Facilitating access to financial services to support farm growth.</li>
            <li>Building a strong community of farmers to share knowledge and experiences.</li>
          </ul>
          <img src={cameroonAgricultureImage} alt="Agriculture in Cameroon" className="case-study-image" />
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 AgFarm. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
