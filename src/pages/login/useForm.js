import { useState, useEffect } from 'react';
import axios from 'axios';

const useForm = (submitForm, validateInfo, role, url) => {
  const [values, setValues] = useState({
    userNo: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isUserAuthenticated, setUserAuthentication] = useState(false);

  useEffect(() => {
    if (errors.numOfErrors === 0 && isSubmitting) {
      submitForm();
    }
  },[errors]);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({...values,[name]: value});
  };

  const handleSignInRequest = (signInUrl, signInValues) => {
    axios.post(signInUrl, {
        username: signInValues.userNo,
        password: signInValues.password
    })
    .then(function (response) {
      if(response.status === 200) {
        return response.data;
      }
    })
    .then(function (data) {
        console.log(data);
        localStorage.setItem('login', JSON.stringify({
          token : "Bearer " + data.jwt,
          role : role 
        }));
        setUserAuthentication(true);
    })
    .catch(function (error) {
        if(error.response.status === 403) {
          if(role === 'student') {
            setErrors({password : "Combination of GR/PR No and Password is wrong", numOfErrors : error.numOfErrors + 1});
          } else if(role === 'teacher') {
            setErrors({password : "Combination of Emp No/Emp EmailId and Password is wrong", numOfErrors : error.numOfErrors + 1});
          }
        }
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validateInfo(values, role));

    setIsSubmitting(true);

    if(errors.numOfErrors === 0) {
      handleSignInRequest(url, values);
    } 

    if(errors.numOfErrors === 0 && isUserAuthenticated === true) {

    }
  };

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;