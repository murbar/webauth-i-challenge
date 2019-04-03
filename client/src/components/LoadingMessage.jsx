import React from 'react';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  padding: 0.5rem;
  margin: 1rem 0;
  font-size: 1.5rem;
`;

const LoadingMessage = () => {
  return <LoadingWrapper>Loading...</LoadingWrapper>;
};

export default LoadingMessage;
