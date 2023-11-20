import React from 'react';
import {App} from './App';
import {
  act,
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import {PaperProvider} from 'react-native-paper';

describe('App component', () => {
  const setup = () => {
    render(
      <PaperProvider>
        <App />
      </PaperProvider>,
    );
  };

  it('should show an add injury button', () => {
    setup();

    expect(
      screen.getByRole('button', {name: /add your injury/i}),
    ).toBeVisible();
  });

  it('should show an "example modal" when pressing the add injury button', () => {
    jest.useFakeTimers();
    setup();

    fireEvent.press(screen.getByRole('button', {name: /add your injury/i}));
    act(() => jest.runAllTimers());

    expect(
      screen.getByText(/your path to wellbeing starts now/i),
    ).toBeVisible();
  });

  it('should submit an injury', async () => {
    jest.useFakeTimers();
    setup();

    fireEvent.press(screen.getByRole('button', {name: /add your injury/i}));
    act(() => jest.runAllTimers());
    fireEvent.changeText(screen.getByTestId('text-input-outlined'), 'knee');
    fireEvent.press(screen.getByRole('button', {name: /submit/i}));

    await waitForElementToBeRemoved(() => screen.getByDisplayValue('knee'));
  });

  it('should go back to main page when cancelling', async () => {
    jest.useFakeTimers();
    setup();

    fireEvent.press(screen.getByRole('button', {name: /add your injury/i}));
    act(() => jest.runAllTimers());
    fireEvent.press(screen.getByRole('button', {name: /cancel/i}));

    await waitForElementToBeRemoved(() =>
      screen.getByText(/your path to wellbeing starts now/i),
    );
  });
});
