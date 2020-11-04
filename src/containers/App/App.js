import styled from 'styled-components';

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


export default App;