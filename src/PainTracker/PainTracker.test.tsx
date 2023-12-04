import React from 'react';

import {render, screen} from '@testing-library/react-native';
import {PainTracker} from './PainTracker';

describe('PainTracker component', () => {
  it('should ask the user how is her pain feeling today', () => {
    render(<PainTracker />);

    expect(screen.getByText('How is your pain level today?')).toBeVisible();
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
});
