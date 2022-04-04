import React from 'react';

const ContentAsset = ({ id, content }) => {
  return (
    <div className="contentAsset">
      <li key={id} className="content">
        {content}
      </li>
    </div>
  );
};

export default ContentAsset;
