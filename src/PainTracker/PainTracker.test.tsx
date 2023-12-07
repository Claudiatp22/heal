import React from 'react';

import {PainTracker} from './PainTracker';
import {render, screen, userEvent} from '@testing-library/react-native';

describe('PainTracker component', () => {
  it('should ask the user how is her pain feeling today', () => {
    render(<PainTracker />);

    expect(screen.getByText(/how is your pain level today?/i)).toBeVisible();
  });

  it('should display several pain levels to choose from', () => {
    render(<PainTracker />);

    expect(screen.getByText(/Amazing! 😀/i)).toBeVisible();
    expect(screen.getByText(/Okay 🙂/i)).toBeVisible();
    expect(screen.getByText(/I feel some pain 😕/i)).toBeVisible();
    expect(screen.getByText(/I'm in pain most of the time 😵‍💫/i)).toBeVisible();
    expect(screen.getByText(/It can get instense 🥴/i)).toBeVisible();
    expect(screen.getByText(/This is unbearable 😫/i)).toBeVisible();
  });

  it('should display user`s registered pain level', async () => {
    render(<PainTracker />);

    await userEvent.press(screen.getByText(/It can get instense 🥴/i));

    expect(
      screen.getByText(/Today you're feeling: It can get instense 🥴/i),
    ).toBeVisible();
  });

  it('should not ask the user to register pain level if there is one', async () => {
    render(<PainTracker />);

    await userEvent.press(screen.getByText(/Amazing! 😀/i));

    expect(
      screen.queryByText(/how is your pain level today?/i),
    ).not.toBeOnTheScreen();
    expect(screen.queryByText(/Okay 🙂/i)).not.toBeOnTheScreen();
  });
});
