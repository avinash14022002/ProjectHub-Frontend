import React from 'react';
import { LoginContext } from '../../contexts/LoginContext';
import Navbar from './Navbar';

const GenericNavbar = () => {     
    return(
        <LoginContext.Consumer>{(loginContext) => {
            const { userAuthStatus, userInfo, handleUserSignOut } = loginContext;

            if(userAuthStatus === true && userInfo !== null && userInfo.role === 'student') {
                return (
                    <Navbar 
                        role='student' 
                        tab1='All Projects' route1='/all-projects'
                        tab2='Completed Projects' route2={`/student/completed-projects/${userInfo.userNo}`}
                        tab3='Ongoing Projects' route3='/student/ongoing-project'
                        buttonName='Sign Out' handleSignOut={handleUserSignOut}
                    />
                );
            } else if(userAuthStatus === true && userInfo !== null && userInfo.role === 'teacher') {
                return (
                    <Navbar 
                        role='teacher' 
                        tab1='All Projects' route1='/all-projects'
                        tab2='Guided Projects' route2={`/teacher/guided-projects/${userInfo.userNo}`}
                        tab3='Ongoing Projects' route3={`/teacher/ongoing-projects/${userInfo.userNo}`}
                        buttonName='Sign Out' handleSignOut={handleUserSignOut}
                    />
                );
            } else if(userAuthStatus === true && userInfo !== null && userInfo.role === 'admin') {
                return (
                    <Navbar 
                        role='admin' 
                        tab1='Students' route1='/admin/input-students-data'
                        tab2='Teachers' route2='/admin/input-teachers-data'
                        tab3='All Projects' route3='/all-projects'
                        buttonName='Sign Out' handleSignOut={handleUserSignOut}
                    />
                );
            }
        
            return (
                <Navbar 
                    role='unassigned' 
                    tab1='Home' route1='/'
                    tab2='About' route2='/about'
                    tab3='Contact' route3='/contact'
                    buttonName='Sign In' 
                />
            );
        }}</LoginContext.Consumer>
    );
};

export default GenericNavbar;