import { render, screen } from '@testing-library/react';
import React from 'react';
import { Hello } from './Hello';

it('renders "hello world!', () => {
  render(<Hello/>);
  const myElement = screen.getByText(/hello world/);
  expect(myElement).toBeInTheDocument();
})