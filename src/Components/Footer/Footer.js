import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerTitle">
        <div className="footerText">
          <p>New Kidsney® Visa® Cardmembers can earn a</p>
          <h3>
            <span className="currency">$</span>
            <span className="amount">100</span>
            <span className="text">Statement Credit</span>
          </h3>
          <div className="links">
            <span>Restrictions apply.</span>
            <button>
              <a>Learn More</a>
            </button>
          </div>
        </div>
        <div className="footerImg">
          <img src="https://cdn-ssl.s7.disneystore.com/is/image/ShopDisney/CardArray_1600x393?fit=constrain&cropN=0,0,1,1&fmt=webp-alpha&qlt=70&wid=1600" />
        </div>
      </div>
      <div className="footerContainer">
        <div className="signUp">
          <div className="signUptext">
            Sign up for our emails to get the inside scoop on special offers and
            new products.
          </div>
          <div className="signUpLinks">
            <button>Sign up</button>
            <div>
              <span>Stay in Touch</span>
              <a>Privacy Policy</a>
            </div>
          </div>
          <div className="socialIcons">
            <ul>
              <li>
                <i class="fab fa-facebook-f"></i>
              </li>
              <li>
                <i class="fab fa-instagram"></i>
              </li>
              <li>
                <i class="fab fa-twitter"></i>
              </li>
              <li>
                <i class="fab fa-pinterest-p"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="items">
          <div className="category">
            <ul>
              <li>Characters</li>
              <li>Parks</li>
              <li>Disney</li>
              <li>Pixar</li>
              <li>Star Wars</li>
              <li>Marvel</li>
              <li>National Geographic</li>
            </ul>
          </div>
          <div className="contentAsset">
            <ul>
              <li>D23</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Site Map</li>
              <li>New</li>
              <li>Sale</li>
            </ul>
            <ul>
              <li>Order Tracking</li>
              <li>Return/Exchange</li>
              <li>Shipping Info</li>
              <li>Account Info</li>
              <li>Store Locator</li>
            </ul>
            <ul>
              <li>Disney Gift Cards</li>
              <li>Guest Services</li>
              <li>Affiliates</li>
              <li>About shopDisney</li>
              <li>Disney® Visa® Card</li>
              <li>Personalization Shop</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerCopyright">
        <div>
          <ul>
            <li>© Kidsney, All Rights Reserved</li>
            <li>Terms of Use</li>
            <li>Additional Content Information</li>
            <li>Privacy Policy</li>
            <li>Your California Privacy Rights</li>
            <li>Do Not Sell My Personal Information</li>
            <li>Children's Online Privacy Policy</li>
            <li>About Kidsney</li>
            <li>Interest-Based Ads</li>
            <li>California Transparency in Supply Chains Act</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
