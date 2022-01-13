import React, { useState } from 'react';
import Spaceship from '../../assets/login/spaceship.svg';
import validateInfo from './validateInfo';
import { LoginContext } from '../../contexts/LoginContext';
import './LoginForm.css';

const LoginForm = ({ role, url }) => {
  const [userData, setUserData] = useState({
    userNo: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  return(
    <LoginContext.Consumer>{(loginContext) => {
        const { handleUserSignIn } = loginContext;

        const handleChange = e => {
          const { name, value } = e.target;
          setUserData({...userData,[name]: value});
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          setErrors(validateInfo(userData, role));
      
          if(Object.keys(errors).length === 0) {
            handleUserSignIn(url, userData, role, setErrors);
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
          </div>
        );
    }}</LoginContext.Consumer>
  );
};

export default LoginForm;