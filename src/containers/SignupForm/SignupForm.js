import React from 'react';
import Input from '../../components/Input/Input';
import Form from '../../components/Form/Form';
import styled from 'styled-components';

const RowWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const SignupForm = () => {
    return(
        <Form buttonLabel="Signup" linkBelowFormText="Already have an account? Login">
            <Input placeholder={"Username"} />
            <RowWrapper>
                <Input placeholder={"First Name"} />
                <Input placeholder={"Last Name"} />
            </RowWrapper>
            <Input placeholder={"Email"} type="email" />
            <Input placeholder={"Phone"} />

        </Form>
    )
}


export default SignupForm;