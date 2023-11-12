import 'react-native';
import React from 'react';
import App from './App';
import {render, screen} from '@testing-library/react-native';

describe('App component', () => {
  it('should show name of the app', () => {
    render(<App />);

    const text = screen.getByText('Heal');

    expect(text).toBeOnTheScreen();
  });
});
