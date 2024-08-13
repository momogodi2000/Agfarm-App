import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/About.css';
import agfarmLogo from '../../images/logo/logo.jpeg';
import teamImage from '../../images/farm3.jpeg';
import missionImage from '../../images/farm2.jpeg';
import valuesImage from '../../images/farm3.jpeg';
import farmingEvolutionImage from '../../images/farm5.jpeg';

const About = () => {
  return (
    <div className="about-container">
      <header className="header1">
        <img src={agfarmLogo} alt="AgFarm Logo" className="logo" />
        <nav className="nav">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </header>
      <main className="main-content">
        <section className="intro-section">
          <h1>About AgFarm</h1>
          <p>
            Empowering the future of agriculture in Cameroon by providing tools, resources, and a supportive community for rural farmers.
          </p>
          <p>
            Cameroon's agricultural sector, predominantly reliant on smallholder farmers, faces significant hurdles. Low yields, limited market access, and financial constraints hinder the growth and development of rural communities. AgFarm is a digital platform designed to address these challenges by providing farmers with the tools and resources they need to thrive.
          </p>
        </section>
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            At AgFarm, our mission is to transform the agricultural landscape in Cameroon by connecting farmers to markets, offering expert advice, and providing financial tools for growth.
          </p>
          <p>
            Our mission is to empower Cameroonian farmers by creating a robust agricultural ecosystem. By connecting farmers to markets, offering expert knowledge, and facilitating access to finance, we aim to increase agricultural productivity, improve livelihoods, and contribute to food security in Cameroon.
          </p>
          <img src={missionImage} alt="Our Mission" className="mission-image" />
        </section>
        <section className="values-section">
          <h2>Our Values</h2>
          <p>
            We believe in fairness, community, and innovation. Our values drive everything we do, from supporting farmers to fostering a sustainable future.
          </p>
          <p>
            We are committed to fairness, transparency, and sustainability. AgFarm is dedicated to creating a level playing field for all farmers, promoting environmentally friendly practices, and building strong partnerships within the agricultural community.
          </p>
          <img src={valuesImage} alt="Our Values" className="values-image" />
        </section>
        <section className="team-section">
          <h2>Meet Our Team</h2>
          <p>
            Our dedicated team is passionate about agriculture and committed to making a difference in the lives of rural farmers in Cameroon.
          </p>
          <img src={teamImage} alt="Our Team" className="team-image" />
        </section>
        <section className="farming-section">
          <h2>The Current State of Agriculture in Cameroon</h2>
          <p>
            In Cameroon, the majority of farmers are smallholders who rely on traditional farming methods. These farmers often face challenges such as limited access to markets, lack of financial resources, and inadequate agricultural knowledge. The supply chain is typically long, involving multiple intermediaries, which reduces the profit margins for the farmers.
          </p>
          <p>
            Factors contributing to low yields include poor soil quality, lack of quality seeds and fertilizers, and outdated farming techniques.
          </p>
          <p>
            Farmers face challenges in reaching markets due to transportation difficulties, post-harvest losses, and price fluctuations.
          </p>
          <p>
            Limited access to credit and insurance hinders farmers' ability to invest in their farms and manage risks.
          </p>
          <p>
            Farmers are vulnerable to climate change and unpredictable weather patterns due to reliance on rain-fed agriculture.
          </p>
          <img src={farmingEvolutionImage} alt="Farming in Cameroon" className="farming-evolution-image" />
        </section>
        <section className="evolution-section">
          <h2>How AgFarm Addresses These Challenges</h2>
          <p>
            AgFarm aims to revolutionize the agricultural sector in Cameroon by:
          </p>
          <ul>
            <li>Connecting farmers directly to buyers, eliminating middlemen, and ensuring fairer prices.</li>
            <li>Providing real-time market data to help farmers make informed decisions about when and where to sell their produce.</li>
            <li>Offering expert agricultural advice to improve farming practices and increase crop yields.</li>
            <li>Facilitating access to financial services, such as loans, insurance, and savings plans, to support farm growth and sustainability.</li>
            <li>Creating a strong community of farmers who can share knowledge, resources, and support each other.</li>
          </ul>
          <p>
            Through these initiatives, AgFarm will empower rural farmers, enhance their livelihoods, and contribute to the overall development of the agricultural sector in Cameroon.
          </p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 AgFarm. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
