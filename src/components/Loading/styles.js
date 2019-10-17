import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  color: rgba(0, 0, 0, 0.5);

  svg {
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
