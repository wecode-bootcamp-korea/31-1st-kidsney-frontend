import React from 'react';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footerTitle">
        <div className="text">
          <p>New Disney® Visa® Cardmembers can earn a</p>
          <h3>
            <span>$</span>
            <span>100</span>
            <span>Statement Credit</span>
          </h3>
          <span>Restrictions apply.</span>
          <button>
            <a>Learn More</a>
          </button>
        </div>
        <div className="footerImg"></div>
      </div>
      <div className="footerContainer">
        <div className="footerSingUp">
          <div>
            Sign up for our emails to get the inside scoop on special offers and
            new products.
          </div>
          <div>
            <button>Sign up</button>
            <div>
              <span>Stay in Touch</span>
              <a>Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footerItems">
        <div className="category">
          <ul>
            <li>Characters</li>
            <li>Parks</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
