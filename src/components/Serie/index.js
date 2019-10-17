import React from 'react';
import PropTypes from 'prop-types';

import { Container, Imagem } from './styles';

export default function Serie({ url, onMouseEnter, onMouseLeave }) {
  return (
    <Container onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Imagem>
        <img src={url} alt="imagem" />
      </Imagem>
    </Container>
  );
}

Serie.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};
