import React from 'react';

const ContentInfo = ({ id, content }) => {
  return (
    <div className="contentInfo">
      <li key={id} className="content">
        {content}
      </li>
    </div>
  );
};

export default ContentInfo;
