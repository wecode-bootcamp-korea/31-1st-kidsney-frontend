import React from 'react';

const ContentCards = ({ id, content }) => {
  return (
    <div className="contentCards">
      <li key={id} className="content">
        {content}
      </li>
    </div>
  );
};

export default ContentCards;
