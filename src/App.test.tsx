import React from 'react';
import {App} from './App';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {PaperProvider} from 'react-native-paper';

describe('App component', () => {
  it('should show an add injury button', () => {
    render(
      <PaperProvider>
        <App />
      </PaperProvider>,
    );

    const button = screen.getByRole('button', {name: /add your injury/i});

    expect(button).toBeOnTheScreen();
  });

  it('should show an "example modal" when pressing the add injury button', () => {
    render(
      <PaperProvider>
        <App />
      </PaperProvider>,
    );

    fireEvent.press(screen.getByRole('button', {name: /add your injury/i}));
    const content = screen.getByText(/example modal./i);

    expect(content).toBeOnTheScreen();
  });
});
