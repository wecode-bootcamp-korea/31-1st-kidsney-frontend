import React, { useState } from 'react';
import SignUpModal from './SignUpModal';
import './LoginModal.scss';
import '../../Styles/common.scss';

const LoginModal = ({ onClickModal }) => {
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const onLoginClickModal = () => {
    setIsLoginClicked(!isLoginClicked);
    console.log(isLoginClicked);
  };

  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputValue;

  function handleInputValue(e) {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  }

  function goToMain() {
    fetch('http://10.58.1.95:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.token) {
          localStorage.setItem('token', res.token);
        } else {
          alert('');
        }
      });
  }

  console.log(isLoginClicked);

  return (
    <div className="loginModal">
      {isLoginClicked && (
        <SignUpModal onLoginClickModal={onLoginClickModal}></SignUpModal>
      )}
      <div className="login">
        <h1 className="logo">KIDSNEY account</h1>
        <button className="closeBtn" onClick={onClickModal}>
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
          <button type="button" onClick={goToMain}>
            Sign In
          </button>
        </form>
        <div className="loginHelp">Need help signing in?</div>
        <div className="createId">
          <button
            onClick={() => {
              onLoginClickModal();
            }}
          >
            Create an Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
