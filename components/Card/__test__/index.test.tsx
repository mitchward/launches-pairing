// src/App.test.js
import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import { Card } from '../index';

test('renders Card component', async () => {
  const { getByTestId } = render(
    <Card
      title={
        <div>
          <h2>Lorem ipsum</h2>
        </div>
      }
    >
      <div>Hello world</div>
    </Card>
  );
  const card = await getByTestId('card');
  const title = await getByTestId('card-title');
  const content = await getByTestId('card-content');
  expect(card).toBeInTheDocument();
  expect(title).toHaveTextContent('Lorem ipsum');
  expect(content).toHaveTextContent('Hello world');
});
