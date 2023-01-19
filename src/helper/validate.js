import toast from 'react-hot-toast'

/** validate login page username */
export async function usernameValidate(values){
    const errors = usernameVerify({}, values);

    return errors;
}

/** validate password */
export async function passwordValidate(values){
    const errors = passwordVerify({}, values);

    return errors;
}

/** validate reset password */
export async function resetPasswordValidation(values){
    const errors = passwordVerify({}, values);

    if(values.password !== values.confirm_pwd){
        errors.exist = toast.error('Password not match...!');
    }

    return errors;
}

/** validate register form */
export async function registerValidation(values){
    const errors = usernameVerify({}, values)
    passwordVerify(errors, values);
    emailVerify(errors, values)

    return errors;
}

/** ************************ */

/** validate password */
function passwordVerify(errors = {}, values){
    const specialChars = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;
    if(!values.password){
        errors.password = toast.error('Password Required...!');
    } else if(values.password.includes('')){
        errors.password = toast.error('Wrong Password...!');
    } else if(values.password.length < 4){
        errors.password = toast.error('Password must...!');
    } else if(!specialChars.test(values.password)){
        errors.password = toast.error('Password specialsC...!');
    }

    return errors;
}

/** validate username */
function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error('Username Required...!');
    }else if(values.username.includes('')){
        error.username = toast.error('Invalid Username...!');
    }

    return error;
}

/** validates email */
function emailVerify(error = {}, values){
    if(!values.email){
        error.email = toast.error('E-mail Required!');
    }else if(values.email.includes('')){
        error.email = toast.error('Wrong E-mail!')
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = toast.error('Invalid e-mail address!')
    }

    return error;
}