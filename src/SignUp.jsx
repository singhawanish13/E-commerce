import React, { useState } from 'react';
import './loginSignUp.css';
// import { Link } from 'react-router-dom';

export const SignUp = () => {

  const [state , setState] = useState("Sign Up")

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  async function SignUp() {
    try {
      const response = await fetch('http://127.0.0.1:4000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Sign up request failed');
      }

      // Handle success response if needed
      console.log('User signed up successfully');
    } catch (error) {
      console.error('Sign up request failed:', error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    SignUp();
    window.location.replace("/")
  };

  function changePage(){
    if(state === "Sign Up"){
      setState("Login")
    }else{
      setState("Sign Up")
    }
  }

  return (
    <div className='loginSignUp'>
      <form action='POST' className='loginSignUp-container shadow-lg' onSubmit={handleSubmit}>
        <h1>{state}</h1>
        <div className='loginSignUp-feilds'>
          {state === "Sign Up" ? <input value={userData.name} onChange={changeHandler} type='text' name='name' placeholder='Your Name' /> : <></>}
          <input value={userData.email} onChange={changeHandler} type='email' name='email' placeholder='Email Address' />
          <input value={userData.password} onChange={changeHandler} type='password' name='password' placeholder='Password' />
        </div>
        <button type='submit'>Continue</button>
        <p className='loginSignUp-login'>
          {state === "Sign Up" ? <p>Already have an account <span onClick={changePage} className='cursor-pointer'> Login</span></p> : <p>Create an account <span onClick={changePage} className='cursor-pointer'> Sign Up</span></p> }
        </p>
        <div className='loginSignUp-agree'>
          {state==="Sign Up"? <><input type='checkbox' name='' id='check' />
          <label for="check">By continuing I agree to the terms of use & privacy policy.</label></>:""}
        </div>
      </form>
    </div>
  );
};
