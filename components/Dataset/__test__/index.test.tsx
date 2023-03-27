// src/App.test.js
import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import { Dataset } from '../index';

test('renders Dataset component', async () => {
  const { getByTestId } = render(<Dataset title="Dataset">Lorem ipsum</Dataset>);
  const dataset = await getByTestId('dataset');
  const title = await getByTestId('dataset-title');
  const content = await getByTestId('dataset-content');
  expect(dataset).toBeInTheDocument();
  expect(title).toHaveTextContent('Dataset');
  expect(content).toHaveTextContent('Lorem ipsum');
});
