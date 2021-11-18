import React, { useState } from 'react';
// import Spaceship from "../../assets/login/spaceship";
import LoginFormProcess from './LoginFormProcess';
import LoginFormSuccess from './LoginFormSuccess';
import './LoginForm.css';

const LoginForm = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
      setIsSubmitted(true);
  };

  return (
    <div className='form-container'>
      <div className='form-content-left'>
        {/* <img className='form-img' src={Spaceship} alt='spaceship-2' /> */}
      </div>
      {!isSubmitted ? (
        <LoginFormProcess submitForm={submitForm} role={props.role} url={props.url} />
      ) : (
        <LoginFormSuccess />
      )}
    </div>
  );
};

export default LoginForm;