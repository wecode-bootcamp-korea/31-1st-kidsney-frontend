import React from 'react';
import Category from './Category/Category';
import ContentAsset from './ContentAsset/ContentAsset';
import ContentCards from './ContentCards/ContentCards';
import ContentInfo from './ContentInfo/ContentInfo';
import Copyright from './ContentCopyright/ContentCopyright';
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
            <button className="linksBtn">Learn More</button>
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
            <i className="fab fa-facebook-f" />
            <i className="fab fa-instagram" />
            <i className="fab fa-twitter" />
            <i className="fab fa-pinterest-p" />
          </div>
        </div>
        <div className="items">
          <div className="itemsCategory">
            <ul className="categoryList">
              {FOOTER_CATEGORY_LIST.map(category => (
                <Category key={category.id} content={category.content} />
              ))}
            </ul>
          </div>
          <div className="asset">
            <ul className="assetList">
              {FOOTER_CONTENT_ASSET.map(asset => (
                <ContentAsset key={asset.id} content={asset.content} />
              ))}
            </ul>
          </div>
          <div className="info">
            <ul className="infoList">
              {FOOTER_CONTENT_INFO.map(info => (
                <ContentInfo key={info.id} content={info.content} />
              ))}
            </ul>
          </div>
          <div className="cards">
            <ul className="cardsList">
              {FOOTER_CONTENT_CARDS.map(cards => (
                <ContentCards key={cards.id} content={cards.content} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="footerCopyright">
        <ul className="copyrightList">
          {FOOTER_CONTENT_COPYRIGHT.map(copyright => (
            <Copyright key={copyright.id} copyright={copyright.copyright} />
          ))}
        </ul>
      </div>
    </footer>
  );
};

const FOOTER_CATEGORY_LIST = [
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
