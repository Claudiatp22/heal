import React from 'react';

import {fireEvent, render, screen} from '@testing-library/react-native';
import {ISurfaceButtonProps, SurfaceButton} from './SurfaceButton';

describe('SurfaceButton component', () => {
  const defaultProps: ISurfaceButtonProps = {
    text: 'a label',
    value: 'myValue',
    onSubmit: () => {},
  };

  const setupWithOverrides = (overrides?: Partial<ISurfaceButtonProps>) =>
    render(<SurfaceButton {...defaultProps} {...overrides} />);

  const setup = () => setupWithOverrides({});

  it('should display a text in the button', () => {
    setup();

    expect(screen.getByText(/a label/i)).toBeVisible();
  });

  it('should display a helper text if there is one', () => {
    setupWithOverrides({helperText: 'This is a helper text'});

    expect(screen.getByText(/this is a helper text/i)).toBeVisible();
  });

  it('should call the submit callback', () => {
    const submitMock = jest.fn();
    setupWithOverrides({onSubmit: submitMock});

    fireEvent.press(screen.getByText(/a label/i));

    expect(submitMock).toHaveBeenCalledWith('myValue');
  });
});
