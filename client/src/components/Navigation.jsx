import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

const NavWrapper = styled.nav`
  border-top: 1px solid #666;
  border-bottom: 1px solid #666;
  ul {
    padding: 1rem 0;
    margin: 0;
    display: flex;
  }
  li {
    list-style: none;
    margin-right: 1.5rem;
  }
  a {
    color: tomato;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &.active {
      color: inherit;
    }
  }
`;

const App = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users List</NavLink>
        </li>
        <li>
          <NavLink to="/login">Log in</NavLink>
        </li>
        <li>
          <NavLink to="/logout">Log out</NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default App;
