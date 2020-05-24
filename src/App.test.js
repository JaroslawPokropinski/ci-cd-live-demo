import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders how is ci / cd', () => {
  const { container  } = render(<App />);
  const howIsCi = container.querySelector('.how-is-ci');
  expect(howIsCi).not.toBe(null);
});

test('renders that ci is awesome', () => {
  const { container  } = render(<App />);
  const howIsCi = container.querySelector('.how-is-ci');
  expect(howIsCi.textContent).toBe('TEST');
});
