import React from 'react'
import styled from 'styled-components';
import Emoji from '../Emoji/Emoji';


const HeaderWrapper = styled.div`
    font-size: 2rem;
    font-weight: 700;
    margin: 5%;
    color: #000;
`;

const Header = (props) => {
    return(
        <HeaderWrapper>
            {props.children}
            <Emoji symbol="🖖" label="welcome"/>
        </HeaderWrapper>
    )
}

export default Header;