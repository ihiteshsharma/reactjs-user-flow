import styled from 'styled-components';

const Button = styled.button`
    width: ${props => props.width ? props.width : 'fit-content'};
    max-width: 400px;
    height: 56px;
    margin: 5px;
    padding: 0.25em 1em;
    font-size: 1.5em;
    font-weight: 600;
    background-color: ${props => props.primary ? "rgba(247,159,121,1)" : "rgba(110, 37, 148,1)" };
    color: ${props => props.primary ? "rgba(0, 0, 0,1)" : "rgba(255,255,255,1)"};
    border: 2px solid rgba(75,40,64,0.5);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    border-radius: 12px;
    transition: 0.3s all;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
`;

export default Button;