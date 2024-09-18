import React from 'react';
import '../styles/properties.css';
import heroPropertiesImage from '../assets/hero_properties.webp';
import openai from '../assets/openai.webp';
import notifications from '../assets/gawg_notifications.webp';
import github from '../assets/github.webp';

const Properties = () => {
  return (
    <div className="properties_container">
      <h2 className="properties_title">Features</h2>
      <p className="properties_description">
        Explore the various features that make our platform unique and powerful.
      </p>
      <div className="properties_grid">
        <div className="properties_block properties_block1">
          <div>
            <h3 className="block_title">Advanced Workflow Capabilities</h3>
            <p className="block_subtitle">Experience unlimited workflow creation with support for multiple technologies, including self-hosted runners and Docker, all wrapped up with detailed workflow summaries. All built open-source.</p>
            <img src={github} alt="GitHub logo" className="block_image_1" />
          </div>
        </div>
        <div className="properties_block properties_block2">
          <div>
            <h3 className="block_title">End-to-End execution</h3>
            <p className="block_subtitle">From Validation to Deployment, All in One View</p>
            <img src={heroPropertiesImage} alt="Hero Properties" className="block_image_2" />
          </div>
        </div>
        <div className="properties_block properties_block3">
          <div>
            <h3 className="block_title">Notify Your Team</h3>
            <p className="block_subtitle">Send Critical Updates to Your Preferred Channels</p>
            <img src={notifications} alt="Slack and MS Teams logo" className="block_image_4" />
          </div>
        </div>
        <div className="properties_block properties_block4">
          <div>
            <h3 className="block_title">AI auto-changelog</h3>
            <p className="block_subtitle">Capture Every Change automatically with AI.</p>
            <img src={openai} alt="OpenAI logo" className="block_image_4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;