import React, { useState } from 'react';
import './FindAddress.scss';

const FindAddress = () => {
  const [address, setAddress] = useState();
  const searchAddress = () => {
    fetch('https://www.juso.go.kr/addrlink/addrLinkApiJsonp.do')
      .then(response => response.json())
      .then(product => {
        setAddress(address.result);
      });
  };
  return (
    <form className="modal" name="form" id="form" method="post">
      <table>
        <tbody>
          <tr>
            <th>우편번호</th>
            <td>
              <input type="text" id="zipNo" name="zipNo" readOnly />
              <input
                id="devU01TX0FVVEgyMDIyMDQwNTExMTYyOTExMjQxOTU="
                name="devU01TX0FVVEgyMDIyMDQwNTExMTYyOTExMjQxOTU="
              />
              <input type="button" value="주소검색" onClick={searchAddress} />
            </td>
          </tr>
          <tr>
            <th>상세주소</th>
            <td>
              <input type="text" id="addrDetail" />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default FindAddress;
