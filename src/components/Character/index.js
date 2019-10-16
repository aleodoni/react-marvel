import React from 'react';
import PropTypes from 'prop-types';

import { Container, Thumb, Name, Content } from './styles';

export default function Character({ url, name, handleClick }) {
  return (
    <Container>
      <Content onClick={handleClick}>
        <Thumb>
          <img src={url} alt="imagem" />
        </Thumb>
        <Name>{name}</Name>
      </Content>
    </Container>
  );
}

Character.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
