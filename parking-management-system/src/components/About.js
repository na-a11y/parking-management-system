import React from 'react';
import './About.css';
import ArticlesSection from './ArticlesSection';

function About() {
  return (
    <div>
    <div className="about-page-new">
      <div className="about-content-new">
        <div className="about-text-new">
          <h1>About Us</h1>
          <p>
          At Parkivia, we're passionate about creating unforgettable outdoor experiences that bring people together. Our mission is to provide a seamless and enjoyable parking experience for visitors to parks, nature reserves, and outdoor recreational areas. We believe that everyone deserves easy access to nature, and that's why we're dedicated to developing innovative parking solutions that make it simple for people to connect with the great outdoors. With a focus on sustainability, technology, and community engagement, we're committed to making a positive impact on the environment and the lives of those who use our services. Whether you're a nature lover, an adventure seeker, or just looking for a peaceful escape, we're here to help you make the most of your outdoor adventure.
          </p>
        </div>
        <div className="about-image-new">
          <img src="https://parkivia.ancorathemes.com/wp-content/uploads/2017/12/img-featur-copyright.jpg" alt="Sneaker Collection" />
        </div>
      </div>
    </div>
    <ArticlesSection/>
  </div>
  );
}

export default About;
