import {
  render,
  screen,
  userEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {Home} from './Home';

describe('Home component', () => {
  const setup = () => {
    render(
      <PaperProvider>
        <Home />
      </PaperProvider>,
    );
  };

  it('should show an add injury button when there is no injury registered', () => {
    setup();

    expect(
      screen.getByRole('button', {name: /add your injury/i}),
    ).toBeVisible();
  });

  it('should ask the user to register an injury when pressing the add injury button', async () => {
    setup();

    await userEvent.press(
      screen.getByRole('button', {name: /add your injury/i}),
    );

    expect(
      screen.getByText(/your path to wellbeing starts now/i),
    ).toBeVisible();
  });

  it('should go back to Home page when cancelling', async () => {
    setup();

    await userEvent.press(
      screen.getByRole('button', {name: /add your injury/i}),
    );
    await userEvent.press(screen.getByRole('button', {name: /cancel/i}));

    await waitForElementToBeRemoved(() =>
      screen.getByText(/your path to wellbeing starts now/i),
    );
  });

  it('should display the user injury instead of the add injury button when there is one registered', async () => {
    setup();

    await userEvent.press(
      screen.getByRole('button', {name: /add your injury/i}),
    );
    await userEvent.type(screen.getByLabelText('input'), 'knee');
    await userEvent.press(screen.getByRole('button', {name: /submit/i}));

    expect(screen.getByText(/you have a knee injury/i)).toBeVisible();
  });
});
