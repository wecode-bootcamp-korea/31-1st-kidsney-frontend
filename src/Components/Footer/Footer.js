import React from 'react';
import Category from './Category';
import ContentAsset from './ContentAsset';
import ContentCards from './ContentCards';
import ContentInfo from './ContentInfo';
import Copyright from './ContentCopyright';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerTitle">
        <div className="footerText">
          <p className="headTxt">New Kidsney® Visa® Cardmembers can earn a</p>
          <h3 className="midTxt">
            <span className="currency">$</span>
            <span className="amount">100</span>
            <span className="txt">Statement Credit</span>
          </h3>
          <div className="links">
            <span className="linksTxt">Restrictions apply.</span>
            <button class="linksBtn">Learn More</button>
          </div>
        </div>
        <div className="footerImg">
          <img
            src="https://images.unsplash.com/photo-1572635148619-a66d0ddbc9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="cards"
          />
        </div>
      </div>
      <div className="footerContainer">
        <div className="signUp">
          <div className="signUpTxt">
            Sign up for our emails to get the inside scoop on special offers and
            new products.
          </div>
          <div className="signUpLinks">
            <button className="signUpBtn">Sign up</button>
            <div className="privacyPolicy">
              <span className="message">Stay in Touch</span>
              <span className="policy">Privacy Policy</span>
            </div>
          </div>
          <div className="socialIcons">
            <i class="fab fa-facebook-f" />
            <i class="fab fa-instagram" />
            <i class="fab fa-twitter" />
            <i class="fab fa-pinterest-p" />
          </div>
        </div>
        <div className="items">
          <div className="category">
            <ul className="categoryList">
              {FOOTER_INFO_LIST.map(category => {
                return (
                  <Category key={category.id} content={category.content} />
                );
              })}
            </ul>
          </div>
          <div className="contentAsset">
            <ul class="list">
              {FOOTER_CONTENT_ASSET.map(asset => {
                return <ContentAsset key={asset.id} content={asset.content} />;
              })}
            </ul>
          </div>
          <div className="contentInfo">
            <ul className="info">
              {FOOTER_CONTENT_INFO.map(info => {
                return <ContentInfo key={info.id} content={info.content} />;
              })}
            </ul>
          </div>
          <div className="contentCards">
            <ul className="cards">
              {FOOTER_CONTENT_CARDS.map(cards => {
                return <ContentCards key={cards.id} content={cards.content} />;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="footerCopyright">
        <ul className="copyrightList">
          {FOOTER_CONTENT_COPYRIGHT.map(copyright => {
            return (
              <Copyright key={copyright.id} copyright={copyright.copyright} />
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

const FOOTER_INFO_LIST = [
  {
    id: 1,
    content: 'Character',
  },
  {
    id: 2,
    content: 'Parks',
  },
  {
    id: 3,
    content: 'Disney',
  },
  {
    id: 4,
    content: 'Pixar',
  },
  {
    id: 5,
    content: 'Star Wars',
  },
  {
    id: 6,
    content: 'Marvel',
  },
  {
    id: 7,
    content: 'National Geographic',
  },
];

const FOOTER_CONTENT_ASSET = [
  {
    id: 1,
    content: 'D23',
  },
  {
    id: 2,
    content: 'Careers',
  },
  {
    id: 3,
    content: 'Contact Us',
  },
  {
    id: 4,
    content: 'Site Map',
  },
  {
    id: 5,
    content: 'New',
  },
  {
    id: 6,
    content: 'Sale',
  },
];

const FOOTER_CONTENT_INFO = [
  {
    id: 1,
    content: 'Order Tracking',
  },
  {
    id: 2,
    content: 'Return/Exchange',
  },
  {
    id: 3,
    content: 'Shipping Info',
  },
  {
    id: 4,
    content: 'Account Info',
  },
  {
    id: 5,
    content: 'Store Locator',
  },
];

const FOOTER_CONTENT_CARDS = [
  {
    id: 1,
    content: 'Disney Gift Cards',
  },
  {
    id: 2,
    content: 'Guest Services',
  },
  {
    id: 3,
    content: 'Affiliate',
  },
  {
    id: 4,
    content: 'About shopDisney',
  },
  {
    id: 5,
    content: 'Disney® Visa® Card',
  },
  {
    id: 6,
    content: 'Personalization Shop',
  },
];

const FOOTER_CONTENT_COPYRIGHT = [
  {
    id: 1,
    copyright: '© Kidsney, All Rights Reserved',
  },
  {
    id: 2,
    copyright: 'Terms of Use',
  },
  {
    id: 3,
    copyright: 'Additional Content Information',
  },
  {
    id: 4,
    copyright: 'Privacy Policy',
  },
  {
    id: 5,
    copyright: 'Your California Privacy Rights',
  },
  {
    id: 6,
    copyright: 'Do Not Sell My Personal Information',
  },
  {
    id: 7,
    copyright: "Children's Online Privacy Policy",
  },
  {
    id: 8,
    copyright: 'About Kidsney',
  },
  {
    id: 9,
    copyright: 'Interest-Based Ads',
  },
  {
    id: 10,
    copyright: 'California Transparency in Supply Chains Act',
  },
];

export default Footer;
