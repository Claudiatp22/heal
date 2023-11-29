import {render, screen} from '@testing-library/react-native';
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {App} from './App';

describe('App component', () => {
  it('should display home page when first loaded', () => {
    render(
      <PaperProvider>
        <App />
      </PaperProvider>,
    );

    const button = screen.getByRole('button', {name: /add your injury/i});

    expect(button).toBeVisible();
  });
});
