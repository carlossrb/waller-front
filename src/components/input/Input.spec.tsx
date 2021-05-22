import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  /**
   * Style tests.
   */

  it('should render vanilla input', () => {
    const { getByLabelText } = render(<Input />);
    expect(getByLabelText('input-component')).toMatchSnapshot();
  });

  it('should render error input', () => {
    const { getByLabelText } = render(<Input error />);
    expect(getByLabelText('input-component')).toMatchSnapshot();
  });

  it('should render xs input', () => {
    const { getByLabelText } = render(<Input size="xs" />);
    expect(getByLabelText('input-component')).toMatchSnapshot();
  });

  it('should render sm input', () => {
    const { getByLabelText } = render(<Input size="sm" />);
    expect(getByLabelText('input-component')).toMatchSnapshot();
  });

  it('should render lg input', () => {
    const { getByLabelText } = render(<Input size="lg" />);
    expect(getByLabelText('input-component')).toMatchSnapshot();
  });

  it('should render input with focus', () => {
    const { getByLabelText } = render(<Input autoFocus />);
    expect(getByLabelText('input-component')).toMatchSnapshot();
  });

  /**
   * Use case / behavior tests.
   */

  it('should a R$ in front of the input', () => {
    const { getByTestId } = render(<Input left={'R$'} />);
    expect(getByTestId('input-left-content')).toHaveTextContent('R$');
  });

  test('should modify value with waller', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(<Input onChange={onChange} />);
    const input = getByLabelText('input-component');
    fireEvent.change(getByLabelText('input-component'), { target: { value: 'waller' } });
    expect((input as any).value).toBe('waller');
  });
});
