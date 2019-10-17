import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */

  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  color: #fff;
  padding: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  /* max-width: 500px; */
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 30px;

    span {
      color: #d44059;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    input,
    textarea {
      font-size: 20px;
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 64px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 15px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    textarea {
      height: 10em;
      padding: 15px 15px;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 20px;
  opacity: 0.5;
  cursor: pointer;

  img {
    height: 50px;
    margin-right: 10px;
  }

  span {
    color: #fff;
    font-size: 42px;
    font-weight: bold;
    margin-right: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;

  button {
    padding: 10px;
    border: 0;
    border-radius: 4px;
    font-size: 20px;
    font-weight: bold;
    margin: 5px;
    transition: background 0.2s;
  }

  button.salvar {
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
