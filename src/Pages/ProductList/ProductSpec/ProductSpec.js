import React, { useState } from 'react';
import 'Pages/ProductList/ProductSpec/ProductSpec.scss';

const ProductSpec = () => {
  const [count, setCount] = useState(1);
  const product = {
    id: 1,
    name: 'Mick Mouse Bodysuit',
    price: '29.90',
    image_url: '/images/Boys/happiness_classic_hat.png',
    character: 'happiness',
    detail:
      'Classic Mickey in his mostfamouse pose passes the Disney tradition to Baby with this two-piece casual set. Includes soft, all-cotton bodysuit and matching shorts.Magic in the detailsTwo-piece set includes bodysuit and shorts Jersey knit bodysuit Classic Mickey screen artShort sleeves Snap back placket Single row of leg snaps Ribbed trim Scoop necklineRed sweat shorts Embroidered classic Mickey appliqué  Elastic waistband Rolled cuffs Pockets Brushed back fleece fabrication interior The bare necessities100% cotton Imported Item No.',
  };

  const { id, name, price, image_url, character, detail } = product;

  return (
    <div className="ProductSpec">
      <div className="spec row">
        <div className="imgContainer">
          <div className="thumnail">
            <img alt="thumnail" src={image_url} />
            <img alt="thumnail" src={image_url} />
          </div>
          <div className="main-img">
            <img alt="main-img" src={image_url} />
          </div>
        </div>
        <div className="orderContainer">
          <div className="orderList">
            <h2>{name}</h2>
            <h2>${price}</h2>
            <p>{detail}</p>
            <div className="sizeOptions">
              <h3> Size </h3>
              <label>
                <input type="checkbox" name="sizeOption" value="small" />
                <span>S</span>
              </label>
              <label>
                <input type="checkbox" name="sizeOption" value="medium" />
                <span>M</span>
              </label>
              <label>
                <input type="checkbox" name="sizeOption" value="large" />
                <span>L</span>
              </label>
            </div>
            <div className="quantity">
              <h3>Quantity</h3>
              <div className="countBtns">
                <button>
                  <i className="fas fa-minus" />
                </button>
                {count}
                <button>
                  <i className="fas fa-plus" />
                </button>
              </div>
            </div>

            <div className="btns">
              <button>Add to Bag</button>
              <button>
                <i className="far fa-heart" />
                &nbsp; Add to Wish List
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="descriptions row">
        <ul>
          <li>
            <i className="fas fa-plus" /> &nbsp; Product Details
          </li>
          <li>
            <i className="fas fa-plus" /> &nbsp; Shipping & Delivery
          </li>
          <li>
            <i className="fas fa-plus" /> &nbsp; Reviews{' '}
          </li>
        </ul>
        <div className="description">{detail}</div>
        <div className="description hidden">
          Most items ordered via Standard Delivery will arrive within 5-7
          business days, personalized items within 1-2 weeks. Exceptions include
          items shipped from locations other than our main warehouse. Express
          Delivery is available for an extra charge. Have questions? Visit our
          Help Page
        </div>
        <div className="description hidden">
          <h2>Reviews</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductSpec;
