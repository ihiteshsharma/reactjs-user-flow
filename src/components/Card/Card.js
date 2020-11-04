import styled from 'styled-components';

const Card = styled.div`
    width: ${props => props.width ? props.width : 'fit-content'};
    height: ${props => props.height ? props.height : 'fit-content'};;
    border-radius: 20px;
    margin: 1em;
    padding: 2em;
    box-shadow: 0 4px 8px 4px rgba(0,0,0,0.4);
    background-color: rgba(255,255,255,0.3);
    z-index: 99;
`;

export default Card;