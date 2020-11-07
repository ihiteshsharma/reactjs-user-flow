import React from 'react';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { useInput } from '../../hooks/useInput';

export const LoginForm = () => {
    const [usernameProps,resetUsername] = useInput("");
    const [passwordProps,resetPassword] = useInput("");

    const submit = event => {
        event.preventDefault();
        //usernameProps.value has username
        //passwordProps.value has password

        //call LoginService here with username, password
        
        resetUsername();
        resetPassword();
    }
    return(
        <form onSubmit={submit}>
            <Input
            {...usernameProps}
            placeholder="Username" />
            <Input
            {...passwordProps}
            placeholder="Password" type="password" />
            <Button label="Login" type="submit"/>
        </form>
    )
};