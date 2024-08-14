import React from 'react';
import Layout from '../../components/Layout'; // Import the Layout component
import '../../css/About.css';
import missionImage from '../../images/farm2.jpeg';
import valuesImage from '../../images/farm3.jpeg';
import teamImage from '../../images/farm3.jpeg';
import farmingEvolutionImage from '../../images/farm5.jpeg';

const About = () => {
  return (
    <Layout>
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
        <img src={missionImage} alt="Our Mission" className="mission-image" />
      </section>
      <section className="values-section">
        <h2>Our Values</h2>
        <p>
          We believe in fairness, community, and innovation. Our values drive everything we do, from supporting farmers to fostering a sustainable future.
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
    </Layout>
  );
};

export default About;
