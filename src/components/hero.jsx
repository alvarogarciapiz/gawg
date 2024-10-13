import React from 'react';
import '../styles/hero.css';
import HERO from '../assets/HERO.webp';

const Hero = () => {
  return (
    <>
      <div className="hero_container">  
        <h1 className="hero_title">Simplify CI/CD with automated GitHub actions Workflows</h1>
        {/* <a href="https://www.producthunt.com/posts/github-actions-workflow-generator-gawg?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-github&#0045;actions&#0045;workflow&#0045;generator&#0045;gawg" target="_blank" rel="noopener noreferrer">
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=491130&theme=neutral"
            alt="GitHub Actions Workflow Generator | Product Hunt"
            style={{ width: '250px', height: '54px' }}
            width="250"
            height="54"
          />
        </a> */}
        <p className="hero_paragraph">
          Automate your GitHub Actions with GAWG, the tool that converts your project needs into efficient GitHub Actions workflows.
        </p>
        <a href="#get-started" className="hero_button get_started">Get started</a>

      </div>
      <img src={HERO} alt="CI/CD Illustration" className="hero_image" />
    </>
  );
};

export default Hero;