import React from 'react';
import RecoProductList from '../../Components/RecoProductList/RecoProductList';
import Review from '../ProductList/ProductSpec/Review/Review';
import './Main.scss';

const Main = () => {
  return (
    <main className="main">
      <Review />
      <div className="mainEvent">
        <img
          src="https://i.ibb.co/K6MSKvW/main-event-toys-png.png"
          alt="main event"
        />
      </div>
      <div className="subEvent">
        <img
          src="https://i.ibb.co/ngW27ZG/sub-event-toys.png"
          alt="sub event"
        />
      </div>
      <div>
        <RecoProductList />
      </div>
    </main>
  );
};

export default Main;
