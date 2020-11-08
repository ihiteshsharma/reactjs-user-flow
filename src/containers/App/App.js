import React from 'react'
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import { LoginForm } from '../LoginForm/LoginForm';
import SignupForm from '../SignupForm/SignupForm';
import Profile from '../Profile/Profile';
import { Route, Switch } from 'react-router-dom';

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
      <Switch>
        <Route exact path='/login' component={LoginForm}/>
        <Route exact path='/signup' component={SignupForm}/>
        <Route exact path='/profile' component={Profile}/>
      </Switch>
      {/* <SignupForm /> */}
    </AppWrapper>
  )
}


export default App;