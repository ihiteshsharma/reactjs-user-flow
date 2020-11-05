import React from 'react'
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import LoginForm from '../LoginForm/LoginForm';

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: 768px) {
      flex-direction: row;
    }
`;

const App = (props) => {
  
  return(
    <AppWrapper>
      <Header>WELCOME</Header>
      <LoginForm />
    </AppWrapper>
  )
}


export default App;