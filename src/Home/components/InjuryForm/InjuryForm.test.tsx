import React from 'react';

import {fireEvent, render, screen} from '@testing-library/react-native';
import {InjuryForm, InjuryFormProps} from './InjuryForm';

describe('InjuryForm component', () => {
  const defaultProps: InjuryFormProps = {
    onSubmit: () => {},
    onCancel: () => {},
  };

  const setupWithOverrides = (overrides?: Partial<InjuryFormProps>) =>
    render(<InjuryForm {...defaultProps} {...overrides} />);

  const setup = () => setupWithOverrides({});

  it('should show a title', () => {
    setup();

    expect(
      screen.getByText(/your path to wellbeing starts now/i),
    ).toBeVisible();
  });

  it('should write an injury', () => {
    setup();

    fireEvent.changeText(screen.getByTestId('text-input-outlined'), 'knee');

    const text = screen.getByDisplayValue('knee');
    expect(text).toBeVisible();
  });

  it('should call submit callback', () => {
    const onSubmit = jest.fn();
    setupWithOverrides({onSubmit: onSubmit});

    fireEvent.changeText(screen.getByTestId('text-input-outlined'), 'knee');
    fireEvent.press(screen.getByRole('button', {name: /submit/i}));

    expect(onSubmit).toHaveBeenCalledWith('knee');
  });

  it('should call cancel callback', () => {
    const onCancel = jest.fn();
    setupWithOverrides({onCancel: onCancel});

    fireEvent.press(screen.getByRole('button', {name: /cancel/i}));

    expect(onCancel).toHaveBeenCalled();
  });
});
