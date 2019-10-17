import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`;

export const Thumb = styled.div`
  display: flex;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 20px;
  }
`;

export const Name = styled.div`
  display: flex;

  width: 100%;
  color: #fff;
  font-size: 24px;
`;

export const Content = styled.div`
  display: flex;
  /* flex: 1; */
  justify-content: space-around;
  align-items: center;

  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
  border-radius: 4px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.5);
  width: 500px;
  margin: 5px;
  cursor: pointer;
`;
