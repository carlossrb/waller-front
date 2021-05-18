import React from 'react';
import arrowLeft from 'url:./images/arrow-left.svg';
import logo from 'url:./images/logo.svg';

// Desktop Header only
export const DeskHeader: React.FC = () => {
  const [animation, setAnimation] = React.useState(false);
  return (
    <header className="hidden sm:flex bg-backgroundColor100 shadow-shadow100 mb-700 py-[21px]">
      <div className="flex flex-row justify-between items-center text-gray700 mx-auto w-[1200px]  px-400">
        <a
          onMouseOver={() => setAnimation(true)}
          onMouseLeave={() => setAnimation(false)}
          href="#"
          className="text-font200 hover:opacity-75 space-x-200 text-primary300 inline-flex items-center"
        >
          <div className={`${animation ? 'animate-bounceX' : ''}`}>
            <img src={arrowLeft} width={16} height={12} />
          </div>
          <span>Voltar</span>
        </a>
        <a href="#">
          <img width="146" src={logo} alt="página inicial da waller" />
        </a>
      </div>
    </header>
  );
};
