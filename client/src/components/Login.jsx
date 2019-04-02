import React from 'react';
import styled from 'styled-components';

const LoginWrapper = styled.div``;

const App = () => {
  return (
    <LoginWrapper>
      <h2>Log in</h2>
      <form>
        <input type="text" />
        <input type="password" />
        <button>Log in</button>
      </form>
    </LoginWrapper>
  );
};

export default App;
