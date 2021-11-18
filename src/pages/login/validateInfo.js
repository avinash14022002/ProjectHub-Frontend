const validateInfo = (values, role) => {
    let errors = {
      numOfErrors : 0
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
          errors.numOfErrors += 1;
        } else if (!checkWhetherUserNoHasAllDigits(values.userNo)) {
          errors.userNo = 'Enter a valid GR/PR No which contain only numbers';
          errors.numOfErrors += 1;
        }

        break;
      case "teacher":
        if (!values.userNo.trim()) {
          errors.userNo = 'Emp No/Emp EmailId is required';
          errors.numOfErrors += 1;
        } else if (!checkWhetherUserNoHasAllDigits(values.userNo)) {
          errors.userNo = 'Enter a valid Emp No/Emp EmailId which contains only numbers';
          errors.numOfErrors += 1;
        }

        break;
      default :
        errors.signInAvailable = "SignIn is only available from either student side, teacher side"
    };
    
    if (!values.password) {
      errors.password = 'Password is required';
      errors.numOfErrors += 1;
    } 
    // TODO :: Also need to check whether password is alphanumeric
    // else if (!isAlphaNumeric(values.password)) {
    //   errors.password = 'Password should contain numbers and uppercase, lowercase letters';
    //   errors.numOfErrors += 1;
    // }

    return errors;
};

export default validateInfo;