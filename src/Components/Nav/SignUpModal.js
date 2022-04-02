import React, { useState } from 'react';
import './Nav.scss';
import './SignUpModal.scss';
import { useNavigate } from 'react-router-dom';

const SignUpModal = ({ onLoginClickModal }) => {
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

  function handleInputValue(e) {
    const { name, value } = e.target;
    setInputValue(inputValue => ({ ...inputValue, [name]: value }));
  }

  const navigate = useNavigate();

  function goToLogin() {
    fetch('http://10.58.1.95:8000/users/signup', {
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
      .then(res => res.json())
      .then(res => {
        if (res.ok) {
          alert('회원가입 성공!');
          navigate('/login');
        } else if (res.status === 400) {
          throw new Error('Not Found');
        } else {
          throw new Error('Unexpected Http Status Code');
        }
        return res.json();
      })
      .catch(error => {
        // console.log(error.message);
      });
  }

  return (
    <div className="signUpModal">
      <div className="signUp">
        <h1 className="logo">KIDSNEY account</h1>
        <button className="closeBtn" onClick={onLoginClickModal}>
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
            placeholder="Birth Date mm/dd/yyyy"
            onChange={handleInputValue}
            name="date_of_birth"
          />
          <button className="createBtn" type="button" onClick={goToLogin}>
            Create Account
          </button>
          <div className="goToSignIn">
            <p>
              Already have an account? <button>Sign In</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
