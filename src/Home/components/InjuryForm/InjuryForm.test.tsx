import React from 'react';

import {render, screen, userEvent} from '@testing-library/react-native';
import {InjuryForm, IInjuryFormProps} from './InjuryForm';

describe('InjuryForm component', () => {
  const defaultProps: IInjuryFormProps = {
    onSubmit: () => {},
    onCancel: () => {},
  };

  const setupWithOverrides = (overrides?: Partial<IInjuryFormProps>) =>
    render(<InjuryForm {...defaultProps} {...overrides} />);

  const setup = () => setupWithOverrides({});

  it('should show a title', () => {
    setup();

    expect(
      screen.getByText(/your path to wellbeing starts now/i),
    ).toBeVisible();
  });

  it('should write an injury', async () => {
    setup();

    await userEvent.type(screen.getByLabelText('input'), 'knee');

    const text = screen.getByDisplayValue('knee');
    expect(text).toBeVisible();
  });

  it('should call submit callback', async () => {
    const onSubmit = jest.fn();
    setupWithOverrides({onSubmit: onSubmit});

    await userEvent.type(screen.getByLabelText('input'), 'knee');
    await userEvent.press(screen.getByRole('button', {name: /submit/i}));

    expect(onSubmit).toHaveBeenCalledWith('knee');
  });

  it('should call cancel callback', async () => {
    const onCancel = jest.fn();
    setupWithOverrides({onCancel: onCancel});

    await userEvent.press(screen.getByRole('button', {name: /cancel/i}));

    expect(onCancel).toHaveBeenCalled();
  });
});
