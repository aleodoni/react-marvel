import React from 'react';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Loading from '../../../components/Loading';

afterEach(cleanup);

it('renderiza corretamente', () => {
  const { container } = render(<Loading />);

  expect(container).toMatchSnapshot();
});
