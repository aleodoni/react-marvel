import React from 'react';
import { render, cleanup, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Character from '../../../components/Character';

afterEach(cleanup);

it('renderiza corretamente', () => {
  function handleClick() {}

  const url = 'http://imagem.jpg';
  const name = 'name';

  const { container } = render(
    <Character url={url} name={name} handleClick={handleClick} />
  );

  expect(container).toMatchSnapshot();
});

it('testa atributos', () => {
  function handleClick() {}

  const url = 'http://imagem.jpg';
  const name = 'name';

  const { container } = render(
    <Character url={url} name={name} handleClick={handleClick} />
  );
  const characterImg = getByTestId(container, 'character-img');
  const characterName = getByTestId(container, 'character-name');

  expect(characterImg).toHaveAttribute('src', 'http://imagem.jpg');
  expect(characterName).toHaveTextContent('name');
});
