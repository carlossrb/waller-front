import React from 'react';
import cn from 'classnames';

type ContainerProps = {
  name?: string;
};

export const Container: React.FC<ContainerProps> = ({ name, children }) => {
  return (
    <div
      className={cn(
        'flex flex-col justify-between p-500 bg-backgroundColor100 shadow-shadow100 m-auto min-h-[100vh] sm:mb-700',
        'sm:rounded-300 sm:min-h-[664px] sm:max-w-[800px]'
      )}
    >
      {children}
    </div>
  );
};
