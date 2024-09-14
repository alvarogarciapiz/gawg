import React from 'react';
import '../styles/features.css';
import featuresBg from '../assets/features_bg.webp';
import iPadFeature from '../assets/iPad_feature.webp';

const Features = () => {
  return (
    <div className="features_container">
      <div className="features_card" style={{ backgroundImage: `url(${featuresBg})` }}>
        <h2 className="features_title">Custom Workflows in a Few Simple Steps</h2>
        <p className="features_description">
        Answer a few simple questions, and let Gawg handle the rest, creating tailored GitHub Actions workflows ready for deployment.
        </p>
        <img src={iPadFeature} alt="iPad Feature" className="features_image" />
      </div>
    </div>
  );
};

export default Features;