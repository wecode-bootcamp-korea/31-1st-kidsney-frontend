import React from 'react';
import './ThemeListImg.scss';

const ThemeListImg = ({ id, src, handleImageSource }) => {
  return (
    <div className="themeListImg">
      <img src={src} onClick={handleImageSource} alt="theme" />
    </div>
  );
};

export default ThemeListImg;
