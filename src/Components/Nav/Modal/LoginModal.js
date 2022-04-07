import React, { useState } from 'react';
import { BASE_URL } from '../../../config';

import './LoginModal.scss';
import '../../../Styles/common.scss';

const LoginModal = ({ closeModal, setActiveModal }) => {
  const changeActiveModal = () => {
    setActiveModal('signUpModal');
  };

  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputValue;

  const isValidEmail = email.includes('@') && email.includes('.');
  const specialLetter = password.search(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/
  );
  const isValidPassword = password.length >= 8;
  const getIsActive = isValidEmail && specialLetter === 0 && isValidPassword;

  const checkValidity = () => {
    if (!isValidEmail) {
      alert('이메일 형식이 맞지 않습니다.');
      return false;
    } else if (specialLetter === -1) {
      alert('비밀번호에 대문자, 소문자, 특수문자를 포함해주세요.');
      return false;
    } else if (!isValidPassword) {
      alert('비밀번호 8자 이상으로 적어주세요');
      return false;
    } else {
      return true;
    }
  };

  function handleInputValue(e) {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  }

  function goToMain() {
    checkValidity() &&
      fetch(`${BASE_URL}/users/signin`, {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.token) {
            alert('로그인 성공!');
            localStorage.setItem('token', res.token);
            localStorage.setItem('first_name', res.first_name);
            closeModal();
          } else {
            alert('다시 시도해 주세요!');
          }
        });
  }

  return (
    <div className="loginModal">
      <div className="login">
        <h1 className="logo">KIDSNEY account</h1>
        <button className="closeBtn" onClick={closeModal}>
          X
        </button>
        <form className="loginContainer">
          <input
            className="loginId"
            type="email"
            placeholder="Username or Email Address"
            onChange={handleInputValue}
            name="email"
          />
          <input
            className="loginPw"
            type="password"
            placeholder="Password"
            onChange={handleInputValue}
            name="password"
          />
          <button
            className={getIsActive ? 'loginButtonActive' : 'loginButton'}
            type="button"
            onClick={goToMain}
          >
            Sign In
          </button>
        </form>
        <div className="loginHelp">Need help signing in?</div>
        <div className="createId">
          <button onClick={changeActiveModal} className="createBtn">
            Create an Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
