import React from 'react';
import '../Checkout.scss';

const Shipping = () => {
  return (
    <>
      <div className="titleWrapper">
        <div className="num">1</div>
        <h2>Shipping</h2>
      </div>
      <form className="shippingContainer">
        <div className="guidance">
          <span className="id">ID</span>
          <span>님 배송정보를 입력해주세요</span>
        </div>
        <div className="Wrapper">
          <div>이름</div>
          <input className="username" placeholder="이름을 입력하세요" />
        </div>
        <div className="Wrapper">
          <span>주소</span>
          <div className="searchAddress">
            <input className="inputAddress" />
            <input type="button" className="address" value="검색" />
          </div>
          <input
            className="addressDetail"
            placeholder="나머지 주소를 입력해주세요"
          />
        </div>
        <div className="checkAddressWrapper">
          <input className="saveAddress" type="checkbox" />
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
