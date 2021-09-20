import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<App />);

    const div = screen.getByRole('main');
    const p = screen.getByText('HELLO');

    expect(asFragment()).not.toBeEmptyDOMElement;
    expect(div).toContainElement(p);
  });
});
