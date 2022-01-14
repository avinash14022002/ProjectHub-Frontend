import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginContext';
import Navbar from './Navbar';

const GenericNavbar = () => {     
    const history = useHistory();
    
    return(
        <LoginContext.Consumer>{(loginContext) => {
            const { userAuthStatus, userInfo, handleUserSignOut } = loginContext;

            const handleChangePassword = () => {
                if(userInfo.role === 'student') {
                    history.push(`/student/change-password/${userInfo.userNo}`);
                } else if(userInfo.role === 'teacher') {
                    history.push(`/teacher/change-password/${userInfo.userNo}`);
                }
            }

            if(userAuthStatus === true && userInfo !== null && userInfo.role === 'student') {
                return (
                    <Navbar 
                        role='student' 
                        tab1='All Projects' route1='/all-projects'
                        tab2='Completed Projects' route2={`/student/completed-projects/${userInfo.userNo}`}
                        tab3='Ongoing Projects' route3='/student/ongoing-project'
                        buttonChangePassword='Change Password' handleChangePassword={handleChangePassword}
                        userAuthStatus={userAuthStatus} 
                        buttonSignOut='Sign Out' handleSignOut={handleUserSignOut}
                    />
                );
            } else if(userAuthStatus === true && userInfo !== null && userInfo.role === 'teacher') {
                return (
                    <Navbar 
                        role='teacher' 
                        tab1='All Projects' route1='/all-projects'
                        tab2='Guided Projects' route2={`/teacher/guided-projects/${userInfo.userNo}`}
                        tab3='Ongoing Projects' route3={`/teacher/ongoing-projects/${userInfo.userNo}`}
                        buttonChangePassword='Change Password' handleChangePassword={handleChangePassword}
                        userAuthStatus={userAuthStatus}
                        buttonSignOut='Sign Out' handleSignOut={handleUserSignOut}
                    />
                );
            } else if(userAuthStatus === true && userInfo !== null && userInfo.role === 'admin') {
                return (
                    <Navbar 
                        role='admin' 
                        tab1='All Projects' route1='/all-projects'
                        tab2='Students' route2='/admin/existing-students'
                        tab3='Teachers' route3='/admin/existing-teachers'
                        userAuthStatus={userAuthStatus}
                        buttonSignOut='Sign Out' handleSignOut={handleUserSignOut}
                    />
                );
            }
        
            return (
                <Navbar 
                    role='unassigned' 
                    tab1='Home' route1='/'
                    tab2='About' route2='/about'
                    tab3='Contact' route3='/contact'
                    buttonName='Sign In' userAuthStatus={userAuthStatus}
                />
            );
        }}</LoginContext.Consumer>
    );
};

export default GenericNavbar;