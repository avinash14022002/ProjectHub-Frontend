import React, { useState, createContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const LoginContext = createContext({
    userAuthStatus: false,
    userInfo: null,
    setUserAuthStatus: () => {},
    setUserInfo: () => {},
    handleUserSignIn: () => {},
    handleUserSignOut: () => {},
});

export const LoginProvider = (props) => {
    const history = useHistory();

    const [userAuthStatus, setUserAuthStatus] = useState(false);
    const [userInfo, setUserInfo] = useState(null);

    const handleUserSignIn = (signInUrl, signInValues, role, setErrors) => {
        axios.post(signInUrl, {
            username: signInValues.userNo,
            password: signInValues.password
        }).then(function (response) {
          if(response.status === 200) {
            return response.data;
          }
        }).then(function (data) {
            sessionStorage.setItem('login', JSON.stringify({
              token : "Bearer " + data.jwt,
              role : role,
              userNo : data.username,
            }));
    
            if(sessionStorage.getItem('login') !== null) {
              setUserAuthStatus(true);
              setUserInfo(JSON.parse(sessionStorage.getItem('login')));
              
              console.log(userAuthStatus);
              console.log(userInfo);
    
              history.push('/all-projects')
            }
        }).catch(function (error) {
            console.log(error);
            setUserAuthStatus(false);
            setUserInfo(null);
    
            if(error.response && error.response.status === 403) {
              if(role === 'student') {
                setErrors({password : "Combination of GR/PR No and Password is wrong"});
              } else if(role === 'teacher' || 'admin') {
                setErrors({password : "Combination of Emp No and Password is wrong"});
              }
            }
        });
    };
    
    const handleUserSignOut = () => {
        sessionStorage.clear();
        
        setUserInfo(null);

        setUserAuthStatus(false);
        
        history.push("/");
    };

    const contextValue = { userAuthStatus, userInfo, setUserAuthStatus , setUserInfo, handleUserSignIn, handleUserSignOut };

    return(
        <LoginContext.Provider value={contextValue}>
            {props.children}
        </LoginContext.Provider>
    );
};