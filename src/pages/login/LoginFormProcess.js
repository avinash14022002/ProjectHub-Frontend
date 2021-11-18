import React, { useEffect } from 'react';
import validateInfo from './validateInfo';
import useForm from './useForm';
import './LoginForm.css';

const LoginFormProcess = ({ submitForm, role, url }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validateInfo, role, url);

  return (
    <div className='form-content-right'>
      <form className='form' onSubmit={handleSubmit} noValidate>
        <h1>
          Get started by Signing In! Fill out the
          information below to get started
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>
            {role === 'student' ? 'GR/PR No' : 'Emp No/Emp EmailId'}
          </label>
          <input
            className='form-input'
            type='text'
            name='userNo'
            placeholder={role === 'student' ? 'Enter your GR/PR No' : 'Enter your Emp No/Emp EmailId'}
            value={values.userNo}
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
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginFormProcess;