// src/App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { Status } from '../index';

test('renders failed Status component', async () => {
  const { findByText } = render(<Status success={true} />);
  const element = await findByText('Success');
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass('success');
});

test('renders successful Status component', async () => {
  const { findByText } = render(<Status success={false} />);
  const element = await findByText('Failure');
  expect(element).toBeInTheDocument();
  expect(element).not.toHaveClass('success');
});
