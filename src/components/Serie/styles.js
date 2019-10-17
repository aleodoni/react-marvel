import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* flex: 1; */
  flex-direction: column;
  align-items: stretch;
  opacity: 0.6;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const Imagem = styled.div`
  display: flex;

  img {
    height: 150px;
    width: 150px;
    border-radius: 4px;
    margin-right: 10px;
    margin-top: 10px;
  }
`;
