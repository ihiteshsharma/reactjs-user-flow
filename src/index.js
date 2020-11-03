import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Input from './components/Input/Input';
import './index.css';
import reportWebVitals from './reportWebVitals';

const App = styled.div`
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

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Input placeholder={"Email"}/>
    </App>
      
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
