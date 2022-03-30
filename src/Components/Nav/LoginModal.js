import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginModal.scss';
import 'Styles/common.scss';

const LoginModal = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputValue;
  const isInputValid = email.includes('@') && password.length >= 5;

  function handleInputValue(e) {
    const { name, value } = e.target;
    console.log(value);
    setInputValue(inputValue => ({ ...inputValue, [name]: value }));
  }

  const navigate = useNavigate();

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
          navigate('/');
        } else {
          alert('');
        }
      });
  }

  function closeToMain() {
    navigate('/');
  }

  return (
    <div className="LoginModal">
      <div className="login">
        <h1 className="logo">KIDSNEY account</h1>
        <button className="closeBtn" onClick={closeToMain}>
          X
        </button>
        <form className="loginContainer">
          <input
            className="loginId"
            type="email"
            placeholder="Username or Email Address"
            onChange={handleInputValue}
            name="email"
          ></input>
          <input
            className="loginPw"
            type="password"
            placeholder="Password"
            onChange={handleInputValue}
            name="password"
          ></input>
          <button
            className={isInputValid ? 'activeBtn' : 'noneBtn'}
            type="button"
            onClick={goToMain}
          >
            Sign In
          </button>
        </form>
        <div className="loginHelp">
          <a href="">Need help signing in?</a>
        </div>
        <div className="createId">
          <a href="/signup">Create an Account</a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
