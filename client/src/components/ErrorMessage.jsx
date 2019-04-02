import React from 'react';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
  background: tomato;
  color: black;
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
`;

const ErrorMessage = ({ children }) => {
  return <ErrorWrapper>{children}</ErrorWrapper>;
};

export default ErrorMessage;
