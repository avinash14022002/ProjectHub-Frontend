import React from 'react';
import './Profile.css';

const ProfilePage = () => {
    return (
        <div className="MainContainer">
            <div className="ProfilePhoto">
                <i class="bi bi-person-circle fa-9x"></i>
            </div>
            <div className="ProfileInfo">
                <p>Name Surname</p>
                <p>Computer Engineering</p>
                <p>name.surname19@vit.edu | personal.emailId@gmail.com</p>
                <p>GrNo. 11911XXX</p>
            </div>
        </div>
    )
};

export default ProfilePage;