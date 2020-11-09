import React, { useState } from 'react';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { useInput } from '../../hooks/useInput';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import './SignupForm.css';
import userService from '../../services/userService';

const SignupForm = () => {
    const [usernameProps,resetUsername] = useInput("");
    const [passwordProps,resetPassword] = useInput("");
    const [firstNameProps, resetFirstName] = useInput("");
    const [lastNameProps, resetLastName] = useInput("");
    const [emailProps, resetEmail] = useInput("");
    const [phoneNumberProps, resetPhoneNumber] = useInput("");
    const [confirmPassProps, resetConfirmPass] = useInput("");
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState("");
    const [token,setToken] = useLocalStorage("", "token");


    const submit = event => {
        event.preventDefault();
        //xxxProps.value has that fields value
        setLoading(true);

        //call Signup Service here with the user object
        let user = {
            username: usernameProps.value,
            password: passwordProps.value
        }
        userService.signup()
        
        //reset fields when done
        resetUsername();
        resetPassword();
        resetFirstName();
        resetLastName();
        resetEmail();
        resetPhoneNumber();
        resetConfirmPass();
    }
    return(
        <>
        <form onSubmit={submit} className="form--wrapper" >        
            <Input
            {...usernameProps}
            placeholder="Username" error="Username not defined"/>
            <Input
            {...firstNameProps}
            placeholder="First Name" />
            <Input
            {...lastNameProps}
            placeholder="Last Name" />
            <Input
            {...emailProps}
            placeholder="Email" type="email" />
            <Input
            {...phoneNumberProps}
            placeholder="Phone Number" />
            <Input
            {...passwordProps}
            placeholder="Password" type="password" />
            <Input
            {...confirmPassProps}
            placeholder="Confirm Password" type="password" />
            <Button label="Sign Up" type="submit"/>
        </form>
        </>
    )
}


export default SignupForm;