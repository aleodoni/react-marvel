import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  max-width: 500px;
  width: 100%;
  margin: 0 auto;

  input {
    display: flex;
    flex: 1;

    margin-top: 50px;
    border: none;
    padding: 15px;
    font-size: 24px;
    background: rgba(0, 0, 0, 0.5);
    color: #999;
    padding: 20px 25px;
    border-radius: 4px;
    border: none;
  }

  button {
    display: flex;
    margin-top: 50px;
    margin-left: 5px;
    border: none;
    padding: 15px;
    font-size: 24px;
    background: rgba(0, 0, 0, 0.4);
    color: #999;
    padding: 20px 25px;
    border-radius: 4px;
    border: none;
  }
`;
