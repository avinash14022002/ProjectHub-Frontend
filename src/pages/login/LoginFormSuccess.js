import React from 'react';
import { useHistory } from 'react-router-dom'
// import SignedIn from "";
import {
  Redirect,
  Link
} from "react-router-dom";
import './LoginForm.css';

const LoginFormSuccess = () => {

  const redirectToHome = () => {
    return (
      <Link to='/all-projects'>
        <h1 className='form-success'>Redirecting you to the home page</h1>
      </Link>
    );
  }

  return (
    <div className='form-content-right'>
      <h1 className='form-success'>You have successfully Signed In!</h1>
      {/* <img className='form-img-2' src={SignedIn} alt='successfully-signed-in-img' /> */}
      <a href='/all-projects'>
        <button className='btn btn-primary' onClick={redirectToHome}>Go Back To HomePage</button>
      </a>
      {/* <Redirect to='/all-projects'>
        <h1 className='form-success'>Redirecting you to the home page</h1>
      </Redirect> */}
    </div>
  );
};

export default LoginFormSuccess;