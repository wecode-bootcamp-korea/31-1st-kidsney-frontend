import React from 'react';
import FindAddress from './FindAddress';
import '../Checkout.scss';

const Shipping = () => {
  const openAddressModal = e => {
    e.preventDefault();
    //모달hidden변경로직
  };
  return (
    <>
      <FindAddress />
      <div className="titleWrapper">
        <div className="num">1</div>
        <h2>Shipping</h2>
      </div>
      <form className="shippingContainer">
        <div className="guidance">
          <span className="id">ID</span>
          <span>님 배송정보를 입력해주세요</span>
        </div>
        <div className="wrapper">
          <div>이름</div>
          <input className="username" placeholder="이름을 입력하세요" />
        </div>
        <div className="addressContainer">
          <span>주소</span>
          <div className="addressMain wrapper">
            <input
              className="inputAddress"
              placeholder="우측 검색버튼을 클릭해주세요"
              readOnly
            />
            <button className="search" onClick={openAddressModal}>
              검색
            </button>
          </div>
          <div className="wrapper">
            <div>주소</div>
            <input
              className="addressDetail"
              placeholder="나머지 주소를 입력해주세요"
            />
          </div>
        </div>
        <div className="saveAddress">
          <input type="checkbox" />
          <span>위의 주소를 기본 배송지로 저장합니다.</span>
        </div>
        <form className="deliverOption">
          <input name="deliverySelector" type="radio" value="kilivery" />
          <div className="bannerWrapper">
            <span>킬리버리 (죽여주는 킬리버리 초음속배송)</span>
            <img src="https://i.ibb.co/S692R4D/001-2.png" alt="킬리버리 배너" />
          </div>
          <input name="deliverySelector" type="radio" value="postbox" />
          <div className="bannerWrapper">
            <span>느릿느릿 선불택배</span>
            <img src="https://i.ibb.co/S692R4D/001-2.png" alt="킬리버리 배너" />
          </div>
        </form>
      </form>
    </>
  );
};

export default Shipping;
