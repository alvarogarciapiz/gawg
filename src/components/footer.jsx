import React from 'react';
import '../styles/footer.css';
import gawgLogo from '../assets/gawg_logo_white.webp';

const Footer = () => {
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer_container">
      <div className="footer_left">
        <a href="/" onClick={handleLogoClick}>
          <img src={gawgLogo} alt="GAWG Logo" className="footer_logo" />
        </a>
        <span className="footer_text">· &nbsp; &nbsp; Designed in Europe 🇪🇺</span>
      </div>
      <div className="footer_right">
        <a href="#get-started" className="footer_link get_started">Get started</a>
        <a>·</a>
        <a href="https://github.com/alvarogarciapiz/gawg/wiki" className="footer_link get_started">Documentation</a>
        <a>·</a>
        <a href="https://www.linkedin.com/in/alvarogarciapiz/" className="footer_link">@lvrpiz</a>
        <a>·</a>
        <a href="mailto:gawg@lvrpiz.com?subject=Hi%20there%20👋🏻&body=are%20you%20interested%20in%20gawg?%20do%20you%20have%20any%20questions?%20are%20you%20contacting%20us%20through%20the%20business%20plan?" className="footer_link">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;