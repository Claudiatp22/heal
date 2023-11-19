import React from 'react';
import {App} from './App';
import {render, screen} from '@testing-library/react-native';

describe('App component', () => {
  it('should show an add injury button', () => {
    render(<App />);

    const button = screen.getByRole('button', {name: /add your injury/i});

    expect(button).toBeOnTheScreen();
  });
});
