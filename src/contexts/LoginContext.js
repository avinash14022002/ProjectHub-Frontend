import React, { useState, createContext } from 'react';

export const LoginContext = createContext({});

export const LoginProvider = (props) => {
    const [userAuthenticationStatus, setUserAuthenticationStatus] = useState(false);
    const [userSignInInfo, setUserSignInInfo] = useState(null);

    return(
        <LoginContext.Provider value={{userAuthenticationStatus, setUserAuthenticationStatus, userSignInInfo, setUserSignInInfo}}>
            {props.children}
        </LoginContext.Provider>
    );
};