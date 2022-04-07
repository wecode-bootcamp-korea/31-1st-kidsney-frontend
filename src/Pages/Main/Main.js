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
      <div className="mainContainer first">
        <div className="mainTxt first">
          <h1 className="logo">Spring Never Looked This Good</h1>
          <p>Make it a stylish season with these swim essentials.</p>
          <p className="logoLink">Shop All Swim</p>
        </div>
        <div className="firstEvent">
          <div className="eventImg">
            <img
              src="https://images.unsplash.com/photo-1607453998774-d533f65dac99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="first event"
            />
          </div>
          <div className="eventImg">
            <img
              src="https://images.unsplash.com/photo-1643492483985-74ff085738a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              alt="first event"
            />
          </div>
          <div className="eventImg">
            <img
              src="https://images.unsplash.com/photo-1608790672275-309c02d888ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="first event"
            />
          </div>
        </div>
      </div>
      <div className="mainContainer second">
        <div className="mainTxt second">
          <h1 className="logo">Freshly Flourished</h1>
          <p>
            The latest springtime collections from the Parks featuring newly
            sprouted finds.
          </p>
        </div>
        <div className="secondEvent">
          <div className="topImg">
            <img
              src="https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="second event"
            />
          </div>
          <div className="bottomImg">
            <div className="bottom">
              <img
                src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="second event"
              />
            </div>
            <div className="bottom">
              <img
                src="https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
                alt="second event"
              />
            </div>
          </div>
        </div>
      </div>

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
