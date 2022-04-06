import React from 'react';
import './ContentInfo.scss';

const ContentInfo = ({ id, content }) => {
  return <li className="contentInfo">{content}</li>;
};

export default ContentInfo;
