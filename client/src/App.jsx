import React from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import Navigation from './components/Navigation';
import Home from './components/Home';
import UsersList from './components/UsersList';
import Login from './components/Login';
import Logout from './components/Logout';

const AppWrapper = styled.main`
  max-width: 40rem;
  margin: 1rem auto;
`;

const App = () => {
  return (
    <AppWrapper>
      <h1>Auth API demo</h1>
      <Navigation />
      <Router>
        <Home path="/" />
        <UsersList path="/users" />
        <Login path="/login" />
        <Logout path="/logout" />
      </Router>
    </AppWrapper>
  );
};

export default App;
