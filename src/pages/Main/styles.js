import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  height: 100vh;

  ul {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    padding-left: 15px;
    padding-right: 15px;
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

  .hidden {
    display: none;
    background-color: red;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 20px;
  opacity: 0.5;

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
