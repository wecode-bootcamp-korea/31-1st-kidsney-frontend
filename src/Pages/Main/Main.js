import React, { useEffect } from 'react';
import RecoProductList from '../../Components/RecoProductList/RecoProductList';
import './Main.scss';

const Main = () => {
  //삭제하기 이거
  useEffect(() => {
    localStorage.setItem(
      'token',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjUsImlhdCI6MTY0OTI1MzI1NiwiZXhwIjoxNjQ5NDI2MDU2fQ.rt5HFrNkW-MRJPy-_Ov2-EzFpRHRUxfd9iMBowKsndc'
    );
  }, []);
  return (
    <main className="main">
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
