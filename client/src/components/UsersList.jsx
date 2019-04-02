import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import useResource from '../hooks/useResource';
import ErrorMessage from './ErrorMessage';
import LoadingMessage from './LoadingMessage';

const ListWrapper = styled.div``;

const UsersList = () => {
  const { state, isLoading, error } = useResource('http://localhost:4000/api/users');
  return (
    <ListWrapper>
      <h2>Users list</h2>
      {isLoading && <LoadingMessage />}
      {error && <ErrorMessage>{error}. Have you logged in?</ErrorMessage>}
      {state.length ? (
        <div className="users-list">
          {state.map(u => (
            <div key={u.id}>
              <h2>{u.name}</h2>
              <p>
                <Link to={`/${u.id}`}>View {u.name}'s posts</Link>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div>No users</div>
      )}
    </ListWrapper>
  );
};

export default UsersList;
