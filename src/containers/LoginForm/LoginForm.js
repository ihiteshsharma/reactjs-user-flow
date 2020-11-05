import React from 'react';
import Input from '../../components/Input/Input';
import Form from '../../components/Form/Form';

// import { config } from '../../_helpers/Constants';

const LoginForm = (props) => {

    return(
        <Form buttonLabel="Login" linkBelowFormText="Don't have an account? Signup">
            <Input placeholder={"Username or Email"}/>
            <Input placeholder={"Password"} type="password" />
        </Form>
    );
};

export default LoginForm;