import React from 'react';
import cn from 'classnames';

type ContainerProps = {
  name: string;
};

export const Container: React.FC<ContainerProps> = ({ name, children }) => {
  //   const { current } = useScreenContext();
  //   return current === name ? (
  return (
    <div
      className={cn(
        'flex flex-col justify-between p-500 bg-backgroundColor100 shadow-shadow100 m-auto relative h-[100vh]',
        'sm:rounded-300 sm:h-full sm:min-h-[664px] sm:w-[600px]'
      )}
    >
      {children}
    </div>
  );
  //   ) : null;
};
