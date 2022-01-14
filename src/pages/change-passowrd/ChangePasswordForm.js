import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import SecureLock from '../../assets/change-password/ResetPassword.png';
import validateFormInfo from './ValidateFormInfo';
import axios from 'axios';

const ChangePasswordForm = ({ role, url }) => {
    const { userId } = useParams();

    const history = useHistory();

    const [changeUserPassword, setChangeUserPassword] = useState({
        userType: role,
        id: userId,
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setChangeUserPassword({...changeUserPassword, [name]: value});
    };

    const handlePasswordSubmit = (url, userPasswordData, token) => {
        axios.post(url, {...userPasswordData}, {
            headers: {
                "Authorization" : token
            }
        }).then((response) => {
            console.log(response);
            const confirmBox = window.confirm(
                "Your password has been successfully changed"
            )
            history.goBack();
        }).catch((err) => { 
            console.log(err.response);
            setErrors({...errors, enteredWrongOldPassword : "The Old Password entered by you is wrong"})
        });
    };

    const submitNewUserPassword = (event) => {
        event.preventDefault();

        setErrors(validateFormInfo(changeUserPassword));
      
        const jwtToken = JSON.parse(sessionStorage.getItem('login')).token;

        if(Object.keys(errors).length === 0) {
            handlePasswordSubmit(url, {
                userType: changeUserPassword.userType,
                id: changeUserPassword.id,
                oldPassword: changeUserPassword.oldPassword,
                newPassword: changeUserPassword.newPassword,
            }, jwtToken);

            
        }
    };

    return (
        <div className='form-container'>
            <div className='form-content-left'>
                <img className='form-img' src={SecureLock} alt='spaceship-2' />
            </div>
            <div className='form-content-right'>
                <form className='form' onSubmit={submitNewUserPassword} noValidate>
                    <h1> 
                        Change Your Password
                    </h1>
                    <div className='form-inputs'>
                        <label className='form-label'>Old Password</label>
                        <input
                            className='form-input'
                            type='text'
                            name='oldPassword'
                            placeholder='Enter Your Old Password'
                            value={changeUserPassword.oldPassword}
                            onChange={handleInputChange}
                        />
                        {errors.oldPassword && <p>{errors.oldPassword}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>New Password</label>
                        <input
                            className='form-input'
                            type='password'
                            name='newPassword'
                            placeholder='Enter your new password'
                            value={changeUserPassword.newPassword}
                            onChange={handleInputChange}
                        />
                        {errors.newPassword && <p>{errors.newPassword}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Confirm Password</label>
                        <input
                            className='form-input'
                            type='password'
                            name='confirmPassword'
                            placeholder='Enter your new password again'
                            value={changeUserPassword.confirmPassword}
                            onChange={handleInputChange}
                        />
                        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                        {errors.oldAndNewAreSame && <p>{errors.oldAndNewAreSame}</p>}
                        {errors.checkBothPasswordsAreSame && <p>{errors.checkBothPasswordsAreSame}</p>}
                        {errors.enteredWrongOldPassword && <p>{errors.enteredWrongOldPassword}</p>}
                    </div>
                    <button className='form-input-btn' type='submit'>
                        Save Your Password
                    </button>
                </form>
            </div>
        </div>
      );
};

export default ChangePasswordForm;