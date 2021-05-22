import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  /**
   * Style tests.
   */

  it('should render button', () => {
    const { getByText } = render(<Button>Hello</Button>);
    expect(getByText('Hello')).toMatchSnapshot();
  });

  it('should render primary button', () => {
    const { getByText } = render(<Button kind="primary">Hello</Button>);
    expect(getByText('Hello')).toMatchSnapshot();
  });

  it('should render secondary button', () => {
    const { getByText } = render(<Button kind="secondary">Hello</Button>);
    expect(getByText('Hello')).toMatchSnapshot();
  });

  it('should render disabled button', () => {
    const { getByText } = render(<Button disabled>Hello</Button>);
    expect(getByText('Hello')).toMatchSnapshot();
  });

  it('should render large button', () => {
    const { getByText } = render(<Button size="lg">Hello</Button>);
    expect(getByText('Hello')).toMatchSnapshot();
  });

  it('should render medium button', () => {
    const { getByText } = render(<Button size="md">Hello</Button>);
    expect(getByText('Hello')).toMatchSnapshot();
  });

  it('should render small button', () => {
    const { getByText } = render(<Button size="sm">Hello</Button>);
    expect(getByText('Hello')).toMatchSnapshot();
  });

  it('should render full button', () => {
    const { getByText } = render(<Button full>Hello</Button>);
    expect(getByText('Hello')).toMatchSnapshot();
  });

  /**
   * Use case / behavior tests.
   */

  it('should call onClick', () => {
    const onClick = jest.fn();

    const { getByText } = render(<Button onClick={onClick}>touch me, baby</Button>);

    fireEvent.click(getByText('touch me, baby'));
    expect(onClick).toBeCalled();
  });

  it('should not call onClick when button disabled', () => {
    const onClick = jest.fn();

    const { getByText } = render(
      <Button disabled onClick={onClick}>
        não me toque
      </Button>
    );

    expect(getByText('não me toque').getAttributeNames()).toContain('disabled');

    fireEvent.click(getByText('não me toque'));

    expect(onClick).not.toBeCalled();
  });
});
