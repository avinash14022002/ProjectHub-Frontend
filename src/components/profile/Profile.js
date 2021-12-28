import React from 'react';
import './Profile.css';

const ProfilePage = ({ userProfile }) => {
    return (
        <div className="MainContainer">
            <div className="ProfilePhoto">
                <i className="bi bi-person-circle fa-9x"></i>
            </div>
            <div className="ProfileInfo">
                <p>{userProfile.firstName + ' ' + userProfile.lastName}</p>
                <p>{userProfile.department}</p>
                {userProfile.role === 'student' 
                ? <p>{userProfile.collegeEmail + ' | ' + userProfile.personalEmail}</p>
                : <p>{userProfile.collegeEmail}</p>}
                {userProfile.role === 'student' && <p>GrNo : {userProfile.userId}</p>}
            </div>
        </div>
    )
};

export default ProfilePage;