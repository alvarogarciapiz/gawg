import React from 'react';
import '../styles/properties.css';

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
            <h3 className="block_title">Title 1</h3>
            <p className="block_subtitle">Subtitle 1</p>
          </div>
        </div>
        <div className="properties_block properties_block2">
          <div>
            <h3 className="block_title">Title 2</h3>
            <p className="block_subtitle">Subtitle 2</p>
          </div>
        </div>
        <div className="properties_block properties_block3">
          <div>
            <h3 className="block_title">Title 3</h3>
            <p className="block_subtitle">Subtitle 3</p>
          </div>
        </div>
        <div className="properties_block properties_block4">
          <div>
            <h3 className="block_title">Title 4</h3>
            <p className="block_subtitle">Subtitle 4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;