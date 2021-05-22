import React, { FC } from 'react';
import cn from 'classnames';

export const sizes = {
  xs: 'text-font300 px-200 py-100',
  sm: 'text-font300 px-200 py-200',
  md: 'text-font300 px-200 py-300',
  lg: 'text-font300 px-200 py-400',
};

export type InputProps = {
  size?: keyof typeof sizes;
  error?: boolean;
  autoFocus?: boolean;
  onChange?: (v: string) => void;
  value?: string;
  left?: React.ReactNode;
} & Omit<JSX.IntrinsicElements['input'], 'size' | 'onChange'>;

export const Input: FC<InputProps> = ({
  size = 'md',
  error = false,
  className,
  onChange,
  value,
  autoFocus = false,
  left,
  ...props
}) => {
  const rootClasses = cn(
    'flex w-full transition-all rounded-200 ring-2 ring-gray400',
    'focus-within:ring-gray200',
    {
      'bg-backgroundColor100 text-gray200': !error,
      'ring-danger400 focus-within:ring-danger200': error,
    },
    className
  );
  const inputClasses = cn(
    'w-full rounded-200 placeholder-gray200 block bg-backgroundColor100 focus:outline-none focus:bg-backgroundColor',
    sizes[size]
  );
  const leftClasses = cn('flex space-x-400 text-gray200', sizes[size]);

  return (
    <div className={rootClasses}>
      {left && (
        <div data-testid="input-left-content" className={leftClasses}>
          {left}
        </div>
      )}
      <input
        aria-label="input-component"
        autoFocus={autoFocus}
        {...props}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={inputClasses}
      />
    </div>
  );
};
