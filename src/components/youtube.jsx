import React from 'react';
import '../styles/youtube.css';

const YouTube = () => {
  return (
    <div className="youtube_container">
      <h2 className="youtube_title">See Our Platform in Action</h2>
      <p className="youtube_subtitle">
      Let us show you how simple it is to get started with GAWG in this quick demo.
      </p>
      <div className="youtube_video">
        <iframe
          width="1080"
          height="720"
          src="https://www.youtube.com/embed/URmeTqglS58"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTube;