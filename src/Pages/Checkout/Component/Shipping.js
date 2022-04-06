import React from 'react';
import FindAddress from './FindAddress';
import '../Checkout.scss';

const Shipping = ({ orderInfoHandler, orderInfo }) => {
  const openAddressModal = e => {
    e.preventDefault(e);

    //모달hidden변경로직
  };

  return (
    <>
      <FindAddress />
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
          <span>주소</span>
          <div className="addressMain wrapper">
            <input
              className="inputAddress"
              placeholder="우측 검색버튼을 클릭해주세요"
              readOnly
            />
            <button
              id="devU01TX0FVVEgyMDIyMDQwNjE0MTcyMTExMjQyMzg="
              className="search"
              onClick={openAddressModal}
            >
              검색
            </button>
          </div>
          <div className="wrapper">
            <div>주소</div>
            <input
              className="address"
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
        <form>
          <div className="deliverOption">
            <input
              name="deliSelector"
              className="wayOfShipping"
              type="radio"
              value="kilivery"
              onChange={orderInfoHandler}
            />
            <div className="bannerWrapper">
              <span>킬리버리 (죽여주는 킬리버리 초음속배송)</span>
              <img
                src="https://i.ibb.co/S692R4D/001-2.png"
                alt="킬리버리 배너"
              />
            </div>
          </div>
          <div className="deliverOption">
            <input
              name="deliSelector"
              className="wayOfShipping"
              type="radio"
              value="postbox"
              onChange={orderInfoHandler}
            />
            <div className="bannerWrapper">
              <span>느릿느릿 선불택배</span>
              <img src="https://i.ibb.co/938ckQT/001-3.png" alt="거북이" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Shipping;
