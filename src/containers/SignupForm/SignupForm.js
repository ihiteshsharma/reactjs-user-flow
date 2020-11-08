import React from 'react';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { useInput } from '../../hooks/useInput';

const SignupForm = () => {
    const [usernameProps,resetUsername] = useInput("");
    const [passwordProps,resetPassword] = useInput("");
    const [firstNameProps, resetFirstName] = useInput("");
    const [lastNameProps, resetLastName] = useInput("");
    const [emailProps, resetEmail] = useInput("");
    const [phoneNumberProps, resetPhoneNumber] = useInput("");
    const [imageProps, resetImage] = useInput("");

    const submit = event => {
        event.preventDefault();
        //usernameProps.value has username
        //passwordProps.value has password

        //call LoginService here with username, password
        
        resetUsername();
        resetPassword();
        resetFirstName();
        resetLastName();
        resetEmail();
        resetPhoneNumber();
        resetImage();
    }
    return(
        <>
        <div className={`separator`}></div>
        <form onSubmit={submit}>
            <Input
            {...imageProps}
            placeholder="Image" type="file"/>
            
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
            <Button label="Sign Up" type="submit"/>
        </form>
        </>
    )
}


export default SignupForm;