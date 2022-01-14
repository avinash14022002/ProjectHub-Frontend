const validateFormInfo = (values) => {
    const errors = {
    };
      
    if(!values.oldPassword) {
        errors.oldPassword = 'Old Password is required';
    } 

    if (!values.newPassword) {
        errors.newPassword = 'New Password is required';
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'Provide confirm password';
    }

    if(values.oldPassword && values.newPassword && values.oldPassword === values.newPassword) {
        errors.oldAndNewAreSame = "Your old password and new password are the same";
    }

    if(values.newPassword && values.confirmPassword && values.newPassword !== values.confirmPassword) {
        errors.checkBothPasswordsAreSame = "Your new password does not match with the confirm password";
    }

    return errors;
};

export default validateFormInfo;