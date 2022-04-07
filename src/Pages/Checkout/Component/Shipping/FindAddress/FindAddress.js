import React, { useState } from 'react';
import './FindAddress.scss';

const FindAddress = () => {
  const [address, setAddress] = useState();
  const [dong, setDong] = useState();
  const ADDRESS_API_KEY = 'devU01TX0FVVEgyMDIyMDQwNjE1MTExMzExMjQyNDE=';
  const ADDRESS_API = `www.juso.go.kr/addrlink/addrLinkApi.do?keyword=${dong}&currentPage=1&resultType=json&countPerPage=20&confmKey=${ADDRESS_API_KEY}`;

  const searchAddress = () => {
    fetch(ADDRESS_API)
      .then(res => res.json())
      .then(addrs => {
        setAddress(addrs);
      });
  };

  const dongHandler = e => {
    setDong(e.target.value);
  };

  return (
    <form
      className="FindAddress modal hidden"
      name="form"
      id="form"
      method="post"
    >
      <div className="zipWrapper">
        <span>우편번호</span>
        <input type="text" name="zipNo" readOnly />
      </div>
      <div>
        <span>주소</span>
        <input id="inputDong" onChange={dongHandler} />
        <input type="button" value="주소검색" onClick={searchAddress} />
      </div>
      <ul className="searchedResult">
        <li>주소1</li>
        <li>주소2</li>
        <li>주소3</li>
        <li>주소4</li>
        <li>주소5</li>
        <li>주소6</li>
      </ul>
    </form>
  );
};

export default FindAddress;
