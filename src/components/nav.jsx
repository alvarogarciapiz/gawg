import React from 'react';
import '../styles/nav.css';
import gawgLogo from '../assets/gawg_logo.png';

const Nav = () => {
  return (
    <nav className="nav_container">
      <div className="nav_logo">
        <img src={gawgLogo} alt="GAWG Logo" />
      </div>
      <a href="#get-started" className="nav_text get_started">
        Get started
      </a>
    </nav>
  );
};

export default Nav;