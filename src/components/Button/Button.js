import styled from 'styled-components';

const Button = styled.button`
    width: fit-content;
    height: fit-content;
    max-width: 50%;
    background-color: ${props => props.primary ? "#2f0601" : "#ffd3ba"};
    color: ${props => props.primary ? "#ffd3ba" : "#000"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.3);
    border-radius: 12px;
    cursor: pointer;
`;

export default Button;