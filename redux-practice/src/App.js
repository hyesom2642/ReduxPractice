// > css 
import './App.css';
import styled from 'styled-components';

// > components 
import Login from './components/Login';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <>
      <Wrapper>
        <LoginForm />
        <Login />
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;