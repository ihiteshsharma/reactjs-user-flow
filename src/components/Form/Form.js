import React from 'react'
import Button from '../Button/Button';
import styled from 'styled-components';
import CustomLink from '../Link/Link';

const FormWrapper = styled.div`
    width: 60vw;
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;


const Form = (props) => {
    return(
        <FormWrapper {...props}>
            <form>
                {props.children}
                <Button primary onClick={props.formAction}>{props.buttonLabel}</Button>
            </form>
            <CustomLink>{props.linkBelowFormText}</CustomLink>
        </FormWrapper>
        
    )

}

export default Form;