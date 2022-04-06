import React, { useState } from 'react';
import { BASE_URL } from '../../../config';
import '../Nav.scss';
import './SignUpModal.scss';

const SignUpModal = ({ closeModal, setActiveModal }) => {
  const goToLoginModal = () => {
    setActiveModal('loginModal');
  };

  const [inputValue, setInputValue] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone_number: '',
    date_of_birth: '',
  });

  const {
    first_name,
    last_name,
    email,
    password,
    phone_number,
    date_of_birth,
  } = inputValue;

  const isValidEmail = email.includes('@') && email.includes('.');
  const specialLetter = password.search(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/
  );
  const isValidPassword = password.length >= 8;

  const checkPhonenumber = phone_number.search(
    /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/
  );

  const isValidInput =
    first_name.length >= 1 &&
    last_name.length >= 1 &&
    date_of_birth.length >= 1;

  const getIsActive =
    isValidEmail &&
    specialLetter === 0 &&
    isValidPassword &&
    checkPhonenumber === 0 &&
    isValidInput;

  const handleButtonValid = () => {
    if (!isValidEmail) {
      alert('이메일 형식이 맞지 않습니다.');
      return false;
    } else if (specialLetter === -1) {
      alert('비밀번호에 대문자, 소문자, 특수문자를 포함해주세요.');
      return false;
    } else if (!isValidPassword) {
      alert('비밀번호 8자 이상으로 적어주세요');
      return false;
    } else if (checkPhonenumber === -1) {
      alert('핸드폰번호 형식은 010-0000-0000 입니다.');
      return false;
    } else {
      return true;
    }
  };

  function handleInputValue(e) {
    const { name, value } = e.target;
    setInputValue(inputValue => ({ ...inputValue, [name]: value }));
  }

  function goToLogin() {
    handleButtonValid() &&
      fetch(`${BASE_URL}/users/signup`, {
        method: 'POST',
        body: JSON.stringify({
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
          phone_number: phone_number,
          date_of_birth: date_of_birth,
        }),
      })
        .then(res => {
          if (res.ok) {
            alert('회원가입 성공!');
            goToLoginModal();
          } else if (res.status === 400) {
            throw new Error('Not Found');
          } else {
            throw new Error('Unexpected Http Status Code');
          }
          return res.json();
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error.message);
        });
  }

  return (
    <div className="signUpModal">
      <div className="signUp">
        <h1 className="logo">KIDSNEY account</h1>
        <button className="closeBtn" onClick={closeModal}>
          X
        </button>
        <h2>Create Your Account</h2>
        <form className="signUpContainer">
          <input
            className="firstName"
            type="text"
            placeholder="First Name"
            onChange={handleInputValue}
            name="first_name"
          />
          <input
            className="lastName"
            type="text"
            placeholder="Last Name"
            onChange={handleInputValue}
            name="last_name"
          />
          <input
            className="signUpEmail"
            type="email"
            placeholder="Email Address"
            onChange={handleInputValue}
            name="email"
          />
          <input
            className="signUpPw"
            type="password"
            placeholder="Password"
            onChange={handleInputValue}
            name="password"
          />
          <input
            className="phoneNumber"
            type="text"
            placeholder="Phone Number"
            onChange={handleInputValue}
            name="phone_number"
          />
          <input
            className="birthDate"
            type="text"
            placeholder="Birth Date yyyy-mm-dd"
            onChange={handleInputValue}
            name="date_of_birth"
          />
          <button
            className={getIsActive ? 'signUpButtonActive' : 'signUpButton'}
            type="button"
            onClick={goToLogin}
          >
            Create Account
          </button>
          <div className="goToSignIn">
            <p>
              Already have an account?&nbsp;
              <button onClick={goToLoginModal}>Sign In</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
