import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  // @ts-ignore -- Getting proper types for @testing-library/jest-dom is not simple https://github.com/testing-library/jest-dom/issues/123#issuecomment-1536490617
  expect(linkElement).toBeInTheDocument();
});
