import React from 'react';
import ArticlesSection from './ArticlesSection';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section text-center">
        <h1>Parking Management System</h1>
        <p className="hero-text">Efficient and easy-to-use parking solutions for your vehicle.</p>
      
      </section>

      <section className="services-section">
  <h2 className="text-center mb-5">Our Services</h2>
  <div className="services">
    <div className="service-card">
      <i className="icon-safe-secure"></i>
      <h4>Safe And Secure</h4>
      <p>24-hour surveillance ensures your car is safe and secure while you are away.</p>
    </div>
    <div className="service-card">
      <i className="icon-concierge"></i>
      <h4>Concierge Options</h4>
      <p>Take advantage of our Concierge services and have us help you out.</p>
    </div>
    <div className="service-card">
      <i className="icon-close-handy"></i>
      <h4>Close And Handy</h4>
      <p>Park at the terminal – just a short walk to your gate.</p>
    </div>
    <div className="service-card">
      <i className="icon-car-wash"></i>
      <h4>Car Wash</h4>
      <p>Simply drive up and go with our Parkivia service. Why not add a car wash?</p>
    </div>
  </div>
</section>
    
<ArticlesSection/>
    </div>
  );
}

export default Home;
