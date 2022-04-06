import React from 'react';
import './ContentCopyright.scss';

const ContentCopyright = ({ id, copyright }) => {
  return (
    <div className="contentCopyright">
      <li className="copyright">{copyright}</li>
    </div>
  );
};

export default ContentCopyright;
