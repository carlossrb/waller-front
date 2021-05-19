import React, { FC, MouseEvent } from 'react';
import cn from 'classnames';
import Load from 'url:./images/spinner.svg';

export const sizes = {
  lg: 'px-600 py-400 text-font300',
  md: 'px-500 py-300 text-font300',
  sm: 'px-400 py-200 text-font200',
  xs: 'px-300 py-200 text-font200',
};

export const kinds = {
  primary: cn(
    'ring-primary500 ring-1 ring-inset text-primary500',
    'hover:text-primary400 hover:ring-primary400',
    'focus:text-primary400 focus:ring-primary400',
    'active:bg-primary500 active:text-white active:ring-primary500',
    'disabled:bg-gray200 disabled:ring-gray400 disabled:text-gray400'
  ),
  secondary: cn(
    'bg-primary500 text-white',
    'hover:bg-primary400',
    'focus:bg-primary400',
    'active:bg-primary400',
    'disabled:bg-gray400 disabled:text-gray200'
  ),
  tertiary: cn(
    'text-primary500',
    'hover:text-primary400',
    'focus:text-primary400',
    'active:text-primary300',
    'disabled:text-gray400'
  ),
  link: cn(
    'text-primary500 underline',
    'hover:text-primary400',
    'focus:text-primary400',
    'active:text-primary300',
    'disabled:text-gray400'
  ),
};

type ButtonProps = {
  kind?: keyof typeof kinds;
  size?: keyof typeof sizes;
  spacing?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  danger?: boolean;
  loading?: boolean;
  full?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

export const Button: FC<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>(function ButtonWithRef(
  {
    autoFocus,
    children,
    kind = 'primary',
    size = 'md',
    spacing = true,
    onClick,
    disabled,
    full,
    danger,
    loading,
    className,
    type,
  },
  ref
) {
  const dangerCss = '!bg-danger600 !text-white !hover:bg-danger700 !focus:bg-danger700 !active:bg-danger800';

  return (
    <button
      className={cn(
        'inline-flex justify-center items-center rounded-200 font-bold',
        'focus:outline-none transition-colors duration-300',
        sizes[size],
        kinds[kind],
        disabled ? 'cursor-default' : 'cursor-pointer',
        {
          ['w-full']: full,
          [dangerCss]: danger && !disabled,
          ['p-0']: ['link'].includes(kind) && spacing === false,
        },
        className
      )}
      autoFocus={autoFocus}
      aria-label="solid-button"
      disabled={disabled}
      type={type}
      onClick={disabled ? undefined : onClick}
      ref={ref}
    >
      {children}
      {loading && (
        <span className="ml-200">
          <img src={Load} alt="carregando..." />
        </span>
      )}
    </button>
  );
});
