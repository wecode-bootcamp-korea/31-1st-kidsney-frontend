import React from 'react';
import './ContentCards.scss';

const ContentCards = ({ id, content }) => {
  return <li className="contentCards">{content}</li>;
};

export default ContentCards;
