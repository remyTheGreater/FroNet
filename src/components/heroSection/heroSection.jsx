import React from 'react';
import illustration from './illustration.svg';
import './heroSection.scss';


function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-title">Explore the World, Browse Limitlessly and Chill</h1>
          <p className="hero-subtitle">Whether You're Studying or Streaming, Our Home Broadband Gives You Unlimited Data and Reliability!</p>
          <button className="hero-button">Join Now</button>
        </div>
        <div className="hero-right">
          <img src={illustration} alt="Illustration of a man using a laptop" style={{maxWidth: "100%"}}/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
