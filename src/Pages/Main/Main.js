import React from 'react';
import RecoProductList from '../../Components/RecoProductList/RecoProductList';
import './Main.scss';

const Main = () => {
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
      <div className="thirdEvent">
        <div className="left img">
          <img
            src="https://images.unsplash.com/photo-1607453998774-d533f65dac99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="third event"
          />
        </div>
        <div className="mid img">
          <img
            src="https://images.unsplash.com/photo-1643492483985-74ff085738a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            alt="third event"
          />
        </div>
        <div className="rigth img">
          <img
            src="https://images.unsplash.com/photo-1608790672275-309c02d888ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="third event"
          />
        </div>
      </div>
      <div>
        <RecoProductList />
      </div>
    </main>
  );
};

export default Main;
