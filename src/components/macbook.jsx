import React from 'react';
import '../styles/macbook.css';
import discordImage from '../assets/discord.webp';

const Macbook = () => {
  return (
    <div className="macbook_container">
      <h2 className="macbook_title">Instant Notifications</h2>
      <p className="macbook_subtitle">
        Stay updated with real-time notifications directly on your device. Slack, Discord, MS Teams and more to come.
      </p>
      <img src={discordImage} alt="Discord Notifications" className="macbook_image" />
    </div>
  );
};

export default Macbook;