import React, { useState } from 'react';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { useInput } from '../../hooks/useInput';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import userService from '../../services/userService';


import './LoginForm.css';

export const LoginForm = () => {
    const [usernameProps,resetUsername] = useInput("");
    const [passwordProps,resetPassword] = useInput("");
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState("");
    const [token,setToken] = useLocalStorage("", "token");

    const submit = event => {
        event.preventDefault();
        //set the button state to loading to prevent more requests
        setLoading(true);
        //usernameProps.value has username
        //passwordProps.value has password
        //call LoginService here with username, password
        userService.login(usernameProps.value,passwordProps.value)
        .then(result => {
            const token = result.data.data.token;
            setToken(token);
            setLoading(false);
        })
        .catch(err => {
            setError(err.response.data.data);
            //clear the error text post 3 seconds
            setTimeout(() => setError(""), 3000);
            setLoading(false);
        });
        resetUsername();
        resetPassword();
    }
    return(
        <>
        <form onSubmit={submit}>
            <span className={`login--errortext`}>{error}</span>
            <Input
            {...usernameProps}
            placeholder="Username" />
            <Input
            {...passwordProps}
            placeholder="Password" type="password" />
            <Button label="Login" type="submit" loading={loading}/>
        </form>
        </>
    )
};