import React from 'react';
import '../styles/nav.css';
import gawgLogo from '../assets/gawg_logo.webp';

const Nav = () => {
  return (
    <nav className="nav_container">
      <div className="nav_logo">
        <a href="/">
          <img src={gawgLogo} alt="GAWG Logo" />
        </a>
      </div>
      <a href="#get-started" className="nav_text get_started">
        Get started
      </a>
    </nav>
  );
};

export default Nav;