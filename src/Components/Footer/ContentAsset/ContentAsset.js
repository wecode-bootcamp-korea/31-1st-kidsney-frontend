import React from 'react';
import './ContentAsset.scss';

const ContentAsset = ({ id, content }) => {
  return <li className="contentAsset">{content}</li>;
};

export default ContentAsset;
