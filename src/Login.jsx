import React, { useState } from 'react';
import './loginSignUp.css';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  function changeHandler(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData); // Display entered data on the console

    // Add your logic for creating user with Firebase here
  };

  return (
    <div className='loginSignUp'>
      <form className='loginSignUp-container shadow-lg' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='loginSignUp-feilds'>
          <input value={userData.email} onChange={changeHandler} type='email' name='email' placeholder='Email Address' />
          <input value={userData.password} onChange={changeHandler} type='password' name='password' placeholder='Password' />
        </div>
        <button type='submit'>Continue</button>
        <p className='loginSignUp-login'>
          Don't have an account? 
          <Link to='/SignUp'><span>Sign Up</span></Link>
        </p>
        <div className='loginSignUp-agree'>
          <input type='checkbox' name='' id='' />
          <p>By continuing I agree to the terms of use & privacy policy.</p>
        </div>
      </form>
    </div>
  );
};
