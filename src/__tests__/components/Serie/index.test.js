import React from 'react';
import { render, cleanup, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Serie from '../../../components/Serie/index';

afterEach(cleanup);

it('renderiza corretamente', () => {
  function handleMouseEnter() {}

  function handleMouseLeave() {}

  const url = 'http://imagem.jpg';

  const { container } = render(
    <Serie
      url={url}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );

  expect(container).toMatchSnapshot();
});

it('testa atributos', () => {
  function handleMouseEnter() {}

  function handleMouseLeave() {}

  const url = 'http://imagem.jpg';

  const { container } = render(
    <Serie
      url={url}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
  const serieImg = getByTestId(container, 'serie-img');

  expect(serieImg).toHaveAttribute('src', 'http://imagem.jpg');
});
