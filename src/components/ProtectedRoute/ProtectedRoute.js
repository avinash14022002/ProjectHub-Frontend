import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginContext';

const ProtectedRoute = ({ children, isAuthenticated, ...rest }) => {
    const { userAuthStatus } = useContext(LoginContext);

    return(
        <Route
            {...rest}
            render={({ location }) => {
                return userAuthStatus === true ? (
                    children
                ) : (
                <Redirect
                    to={{
                    pathname: "/",
                    state: { from: location },
                    }}
                />
                );
            }}
        />
    );
};

export default ProtectedRoute;