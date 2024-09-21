import React from 'react';
import '../styles/documentation.css';

const Documentation = () => {
  return (
    <div className="documentation_container">
      <h2 className="documentation_title">Documentation</h2>
      <p className="documentation_subtitle">
        Welcome to the official documentation. Here you will find all the information you need to get started and make the most out of our application. For more detailed information, please refer to our <a href="https://github.com/alvarogarciapiz/gawg/wiki" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>GitHub Wiki</a>.
      </p>
      <div className="documentation_quick_links">
        <h3>Quick Links if You're Already Familiar</h3>
        <ul>
          <li><a href="https://github.com/alvarogarciapiz/gawg/wiki/Usage-(If-you-have-filled-the-website-form)" target="_blank" rel="noopener noreferrer">Usage page if you filled the website form and installed the app</a></li>
          <li><a href="https://github.com/alvarogarciapiz/gawg/wiki/Usage-(If-you've-just-installed-the-app)" target="_blank" rel="noopener noreferrer">Usage page if you only installed the app</a></li>
        </ul>
        <h3>Don't Forget</h3>
        <ul>
          <li><a href="https://github.com/alvarogarciapiz/gawg/wiki/Secrets-configuration" target="_blank" rel="noopener noreferrer">Secrets configuration</a></li>
          <li><a href="https://github.com/alvarogarciapiz/gawg/wiki/Configure-workflow_config.yml-file" target="_blank" rel="noopener noreferrer">workflow_config.yml configuration</a></li>
          <li><a href="https://github.com/alvarogarciapiz/gawg/wiki/Configure-sonar%E2%80%90project.properties-file" target="_blank" rel="noopener noreferrer">sonar‐project.properties configuration</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Documentation;