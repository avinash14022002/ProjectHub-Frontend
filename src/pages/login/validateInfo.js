const validateInfo = (values, role) => {
    const errors = {
    };
  
    const checkWhetherUserNoHasAllDigits = (userNo) => {
      for(let idx in userNo) {
        if(userNo.charCodeAt(idx) < 48 || userNo.charCodeAt(idx) > 57) {
          return false;
        }
      }

      return true;
    };

    switch (role) {
      case "student":
        if (!values.userNo.trim()) {
          errors.userNo = 'GR/PR No is required';
        } else if (!checkWhetherUserNoHasAllDigits(values.userNo)) {
          errors.userNo = 'Enter a valid GR/PR No which contain only numbers';
        }

        break;
      case "teacher":
        if (!values.userNo.trim()) {
          errors.userNo = 'Emp No is required';
        } else if (!checkWhetherUserNoHasAllDigits(values.userNo)) {
          errors.userNo = 'Enter a valid Emp No which contains only numbers';
        }

        break;
      case "admin": 
        if (!values.userNo.trim()) {
          errors.userNo = 'Emp No is required';
        }

        break;
      default :
        errors.signInAvailable = "SignIn is only available from either student side, teacher side or admin side"
    };
    
    if (!values.password) {
      errors.password = 'Password is required';
    } 
    
    // TODO :: Also need to check whether password is alphanumeric
    // else if (!isAlphaNumeric(values.password)) {
    //   errors.password = 'Password should contain numbers and uppercase, lowercase letters';
    //   errors.numOfErrors += 1;
    // }

    return errors;
};

export default validateInfo;