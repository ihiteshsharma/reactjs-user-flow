import React from 'react'
import styled from 'styled-components';


const InputWrapper = styled.div`
    width: 60vw;
    max-width: 400px;
    height: 56px;
    border-radius: 12px;
    padding: 0 1em;
    font-size: 1.5em;
    position: relative;
    background-color: rgba(255,255,255,0.5);
    transition: 0.3s all;
    outline: none;
    pointer-events: ${props => props.locked ? `none` : null};

    :hover{
        background-color: rgba(255,255,255,0.7);
        box-shadow: 0px 4px 20px 0px rgba(0,0,0,0.5);
    }
    :active{
        background-color: "#fff";
    }
`;

const InputComponent = styled.input`
    width: 100%;
    height: 56px;
    position: relative;
    padding: 0px 1%;
    border: none;
    border-radius: 4px;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;
    background-color: transparent;
    color: #282828;
    outline: none;
    box-shadow: 0px 4px 20px 0px transparent;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,
        0.1s padding ease-in-out;
`;
const Input = (props) => {
    return(
        <InputWrapper {...props}>
            <InputComponent {...props}/>
        </InputWrapper>
    )
}

export default Input;