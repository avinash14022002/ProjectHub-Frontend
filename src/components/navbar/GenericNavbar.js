import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const GenericNavbar = () => {
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
        if(localStorage.getItem('login') !== null) {
            setUserData(JSON.parse(localStorage.getItem('login')));
            console.log(userData);
            console.log(localStorage.getItem('login'));
        }
    });

    if(userData !== null && userData.role === 'student') {
        return (
            <Navbar 
                role='student' 
                tab1='All Projects' route1='/all-projects'
                tab2='Completed Projects' route2='/student/completed-projects'
                tab3='Ongoing Projects' route3='/student/ongoing-projects'
                buttonName='Sign Out' 
            />
        );
    } else if(userData !== null && userData.role === 'teacher') {
        return (
            <Navbar 
                role='teacher' 
                tab1='All Projects' route1='/all-projects'
                tab2='Guided Projects' route2='/teacher/guided-projects'
                tab3='Ongoing Projects' route3='/teacher/ongoing-projects'
                buttonName='Sign Out' 
            />
        );
    } else if(userData !== null && userData.role === 'admin') {
        return (
            <Navbar 
                role='admin' 
                tab1='Students' route1='/admin/input-students-data'
                tab2='Teachers' route2='/admin/input-teachers-data'
                tab3='All Projects' route3='/all-projects'
                buttonName='Sign Out' 
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
};

export default GenericNavbar;