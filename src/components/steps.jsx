import React from 'react';
import '../styles/steps.css';

const Steps = () => {
  return (
    <div className="steps_container">
      <h2 className="steps_title">Installation made easy, up and running in no time.</h2>
      <div className="steps_list">
        <div className="steps_item">
          <div className="steps_number">📝</div>
          <div className="steps_text">
            <span className="desktop_text">Provide a few details in the form to begin the process.</span>
            <span className="mobile_text">Fill the form</span>
          </div>
        </div>
        <div className="steps_item">
          <div className="steps_number">💻</div>
          <div className="steps_text">
            <span className="desktop_text">Install the GitHub app to connect everything seamlessly together.</span>
            <span className="mobile_text">Install the GitHub app</span>
          </div>
        </div>
        <div className="steps_item">
          <div className="steps_number">🗄️</div>
          <div className="steps_text">
            <span className="desktop_text">“Make final tweaks to your files for an optimized workflow.”</span>
            <span className="mobile_text">Configure your files</span>
          </div>
        </div>
        <div className="steps_item">
          <div className="steps_number">🥳</div>
          <div className="steps_text">
            <span className="desktop_text">“Everything’s ready! Your workflow is now live and ready to make it's first run.”</span>
            <span className="mobile_text">You're all set!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;