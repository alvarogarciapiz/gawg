import React from 'react';
import 'lite-youtube-embed';
import '../styles/youtube.css';
import '../styles/lite-yt-embed.css';
import YouTubeImg from '../assets/youtube.webp';

const YouTube = () => {
  return (
    <div className="youtube_container">
      <h2 className="youtube_title">See Our Platform in Action</h2>
      <p className="youtube_subtitle">
        Let us show you how simple it is to get started with GAWG in this quick demo.
      </p>
      <div className="youtube_video">
        <lite-youtube 
          videoid="RbYGMNVG2xg" 
          style={{ 
            width: '100%', 
            height: 'auto', 
            aspectRatio: '16/9', 
            backgroundImage: `url(${YouTubeImg})`,
          }}
        ></lite-youtube>
      </div>
    </div>
  );
};

export default YouTube;