import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  /* justify-content: center; */

  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* flex: 1; */

  color: #fff;
  padding: 20px;
  margin-top: 30px;
  /* max-width: 500px; */
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    padding-left: 15px;
    padding-right: 15px;
    padding-top: 20px;
  }

  li {
    display: flex;
    padding: 10px;
  }

  li.active a {
    background: rgba(0, 0, 0, 0.6);
  }

  li a {
    cursor: pointer;
    padding: 10px;
    border-radius: 4px;
    font-weight: bold;
    color: #fff;

    background: rgba(0, 0, 0, 0.2);
  }
`;

export const Character = styled.div`
  display: flex;
  /* flex: 1; */
`;

export const Image = styled.div`
  display: flex;

  img {
    height: 200px;
    width: 200px;
    border-radius: 4px;
  }
`;

export const Info = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  flex-direction: column;

  margin-left: 20px;
`;

export const Name = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const Desc = styled.div`
  font-size: 18px;
  line-height: 32px;
  opacity: 0.4;
`;

export const Series = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  flex-direction: row;
  flex-wrap: wrap;

  width: 100%;
  /* flex: 1; */
  /* flex-direction: column; */

  padding-top: 20px;
`;

export const SerieInfo = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100px;
  /* flex: 1; */
  /* flex-direction: column; */

  padding-top: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  flex: 1;

  button {
    padding: 10px;
    border: 0;
    border-radius: 4px;
    font-size: 20px;
    font-weight: bold;
    margin: 5px;
    transition: background 0.2s;
  }

  button.editar {
    background: #d44059;
    color: #fff;

    &:hover {
      background: ${darken(0.1, '#d44059')};
    }
  }

  button.voltar {
    background: #4dbaf9;
    color: #fff;

    &:hover {
      background: ${darken(0.1, '#4dbaf9')};
    }
  }
`;
