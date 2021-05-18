import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { Button } from './Button';

describe('Button', () => {
  it('should render button', () => {
    const { getByText } = render(<Button>Hello</Button>);
    expect(getByText('Hello')).toMatchSnapshot();
  });
});
