import React from 'react';

const Shipping = () => {
  return (
    <div>
      <span>이름</div>
      <input className="username" placeholder="이름을 입력하세요" />
      <span className="id">ID</div>      
      <div className="addressContainer">
        <span>주소</span>/>
        <input className="address">주소</input>
        <input type="button" className="address" value="검색">주소</input>
        <input></input>

      </div>
      이름() 아이디 (이메일 가져옴) 주소&우편번호 API(주소,상세주소, 우편번호).
      이 주소를 저장. 배송방법(일반배송, 키즈니 익스프레스 딜리버리)
    </div>
  );
};

export default Shipping;
