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
        <span>·</span>
        <a href="https://github.com/alvarogarciapiz/gawg/wiki" className="footer_link get_started">Documentation</a>
        <span>·</span>
        <a href="https://www.linkedin.com/in/alvarogarciapiz/" className="footer_link">@lvrpiz</a>
        <span>·</span>
        <a href="mailto:gawg@lvrpiz.com?subject=Let's%20Talk%20About%20GAWG%20🚀&body=Hi%20there!%20I'm%20interested%20in%20learning%20more%20about%20GAWG.%20Could%20you%20help%20answer%20some%20questions%20or%20provide%20details%20about%20the%20Business%20Plan?" className="footer_link">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;