import React from 'react';

import bannerStackImg from '../assets/banner-stack.png'; 

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <div className="hero-text">
          <h1>
            Build Your Ideal
            <span> Development Stack</span>
          </h1>

          <p className="hero-description">
            Explore frontend, backend, database, and tooling options, 
            compare them side by side, and put together the stack that 
            fits your next project.
          </p>

          <div className="hero-buttons">
            <a href="#technologies" className="primary-button">
              Explore Technologies
            </a>

            <a href="#about" className="secondary-button">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="illustration-box">
          <img src="src/assets/banner-stack.png" alt="3D Illustration" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
