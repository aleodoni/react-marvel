import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import {
  render,
  cleanup,
  getByTestId,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import reducer from '../../../store/modules/rootReducer';
import Search from '../../../components/Search';

afterEach(cleanup);

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),

    store,
  };
}

it('renderiza corretamente', () => {
  function handleSearch() {}

  const { container } = renderWithRedux(<Search handleSearch={handleSearch} />);

  expect(container).toMatchSnapshot();
});

it('testa componentes básicos', () => {
  function handleSearch() {}

  const { container } = renderWithRedux(<Search handleSearch={handleSearch} />);

  const inputSearch = getByTestId(container, 'input-search');
  const buttonSearch = getByTestId(container, 'button-search');

  expect(inputSearch).toHaveAttribute(
    'placeHolder',
    'Procure seu herói favorito'
  );
  expect(buttonSearch).toHaveAttribute('type', 'button');
});

it('testa pesquisa', () => {
  function handleSearch(e) {
    expect(e).toBe('deadpool');
  }

  const { container } = renderWithRedux(<Search handleSearch={handleSearch} />);

  const inputSearch = getByTestId(container, 'input-search');
  const buttonSearch = getByTestId(container, 'button-search');

  fireEvent.change(inputSearch, { target: { value: 'deadpool' } });
  fireEvent.click(buttonSearch);
});
