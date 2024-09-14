import React from 'react';
import '../styles/hero.css';
import HERO from '../assets/HERO.webp';

const Hero = () => {
  return (
    <div className="hero_container">
      <h1 className="hero_title">Simplify CI/CD with automated GitHub actions Workflows</h1>
      <p className="hero_paragraph">
        Automate your GitHub Actions with GAWG, the tool that converts your project needs into efficient GitHub Actions workflows.
      </p>
      <a href="#get-started" className="hero_button get_started">Get started</a>
      <img src={HERO} alt="CI/CD Illustration" className="hero_image" />
    </div>
  );
};

export default Hero;