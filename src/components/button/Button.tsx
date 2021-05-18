import React, { FC } from 'react';

export const Button: FC = ({ children }) => {
  return <button className="bg-primary400 text-danger50">{children}</button>;
};
