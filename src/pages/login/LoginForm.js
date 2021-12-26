import React, { useState, useEffect, useContext } from 'react';
import Spaceship from '../../assets/login/spaceship.svg';
import validateInfo from './validateInfo';
import axios from 'axios';
import { LoginContext } from '../../contexts/LoginContext';
import './LoginForm.css';

const LoginForm = ({role, url}) => {

  const { userAuthenticationStatus, setUserAuthenticationStatus, userSignInInfo, setUserSignInInfo } = useContext(LoginContext);

  const [userData, setUserData] = useState({
    userNo: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    
  },[errors]);

  const handleSignInRequest = (signInUrl, signInValues) => {
    axios.post(signInUrl, {
        username: signInValues.userNo,
        password: signInValues.password
    }).then(function (response) {
      if(response.status === 200) {
        return response.data;
      }
    }).then(function (data) {
        localStorage.setItem('login', JSON.stringify({
          token : "Bearer " + data.jwt,
          role : role,
          userData : {
            userNo : data.username,
            username : data.firstName + ' ' + data.lastname
          }
        }));

        if(localStorage.getItem('login') !== null) {
          setUserAuthenticationStatus(true);
          setUserSignInInfo(JSON.parse(localStorage.getItem('login')));
        }
    }).catch(function (error) {
        console.log(error);
        setUserAuthenticationStatus(false);

        if(error.response && error.response.status === 403) {
          if(role === 'student') {
            setErrors({password : "Combination of GR/PR No and Password is wrong"});
          } else if(role === 'teacher' || 'admin') {
            setErrors({password : "Combination of Emp No and Password is wrong"});
          }
        }
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData({...userData,[name]: value});
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validateInfo(userData, role));

    if(Object.keys(errors).length === 0) {
      handleSignInRequest(url, userData);
    }
  };

  return (
    <div className='form-container'>
      <div className='form-content-left'>
        <img className='form-img' src={Spaceship} alt='spaceship-2' />
      </div>
      <div className='form-content-right'>
        <form className='form' onSubmit={handleSubmit} noValidate>
          <h1>
            Get started by Signing In! Fill out the
            information below to get started
          </h1>
          <div className='form-inputs'>
            <label className='form-label'>
              {role === 'teacher' || role === 'admin' ? 'Emp No' : 'GR/PR No'}
            </label>
            <input
              className='form-input'
              type='text'
              name='userNo'
              placeholder={role === 'teacher' || role === 'admin' ? 'Enter your Emp No' : 'Enter your GR/PR No'}
              value={userData.userNo}
              onChange={handleChange}
            />
            {errors.userNo && <p>{errors.userNo}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Password</label>
            <input
              className='form-input'
              type='password'
              name='password'
              placeholder='Enter your password'
              value={userData.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <button className='form-input-btn' type='submit'>
            Sign In
          </button>
        </form>
      </div>
      {/* {!isSubmitted ? (
        <LoginFormProcess submitForm={submitForm} role={props.role} url={props.url} />
      ) : (
        <LoginFormSuccess />
      )} */}
    </div>
  );
};

export default LoginForm;