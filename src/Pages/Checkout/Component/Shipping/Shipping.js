import React, { useState } from 'react';
import './Shipping.scss';

const Shipping = ({ orderInfoHandler, orderInfo }) => {
  const [isFindAddressOpen, setIsFindAddressOpen] = useState(false);

  const openAddressModal = e => {
    e.preventDefault(e);
    setIsFindAddressOpen(!isFindAddressOpen);
  };

  //기능구현중(행안부API)
  // const handleFindModal = () => {
  //   setIsFindAddressOpen(!isFindAddressOpen);
  // };
  return (
    <div className="Shipping">
      <div className="titleWrapper">
        <div className="num">1</div>
        <h2>Shipping</h2>
      </div>
      <div className="mainContainer">
        <div className="guidance">
          <span className="id">ID</span>
          <span>님 배송정보를 입력해주세요</span>
        </div>
        <div className="wrapper">
          <div>이름</div>
          <input
            className="name"
            placeholder="이름을 입력하세요"
            onChange={orderInfoHandler}
          />
        </div>
        <div className="addressContainer">
          <div className="wrapper">
            <div>우편번호</div>
            <input
              className="zipCode"
              placeholder="우측 버튼으로 우편번호를 검색해주세요"
              onChange={orderInfoHandler}
              // readOnly
            />
            <button className="search" onClick={openAddressModal}>
              검색
            </button>
          </div>
          <div>주소</div>
          <div className="wrapper">
            <input
              className="addressMain"
              placeholder="우편번호를 검색해주세요"
              onChange={orderInfoHandler}
              // readOnly
            />
          </div>
          <div className="wrapper">
            <div>상세주소</div>
            <input
              className="addressDetail"
              placeholder="나머지 주소를 입력해주세요"
              onChange={orderInfoHandler}
            />
          </div>
        </div>
        <div className="saveAddress">
          <input
            className="updateAddress"
            type="checkbox"
            value={!orderInfo.updateAddress}
            onChange={orderInfoHandler}
          />
          <span>위의 주소를 기본 배송지로 저장합니다.</span>
        </div>
        <form className="deliveryWrapper">
          <span>배송방법</span>
          <div className="deliveryOption">
            <input
              name="deliSelector"
              className="wayOfShipping"
              type="radio"
              value="kilivery"
              onChange={orderInfoHandler}
            />
            <div className="bannerWrapper">
              <span>킬리버리 초음속배송</span>
              <img
                src="https://i.ibb.co/S692R4D/001-2.png"
                alt="킬리버리 배너"
              />
            </div>
          </div>
          <div className="deliveryOption">
            <input
              name="deliSelector"
              className="wayOfShipping"
              type="radio"
              value="postbox"
              onChange={orderInfoHandler}
            />
            <div className="bannerWrapper">
              <span>느릿느릿 선불택배</span>
              <img
                src="https://i.ibb.co/938ckQT/001-3.png"
                alt="귀여운거북이"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
