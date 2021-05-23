import React from 'react';
import { Button } from '../../../components/button/Button';
import { Input } from '../../../components/input/Input';
import Back from 'url:../components/images/arrow-left.svg';

export const Withdraw = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <span className="flex flex-row items-center mb-300">
        {open && <ArrowBack onClick={() => setOpen(false)} />}
        <h2 className="text-center w-full">Realizar um resgate</h2>
      </span>
      <p className="text-font300 text-white font-normal mb-200">
        Insira o valor desejado para realizar o saque. Lembre-se que o rendimento da sua conta será menor para cada
        valor retirado
      </p>
      {open ? (
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            console.log('OLAAA');
          }}
          className="flex flex-col items-start justify-center h-full text-gray200 font-normal text-font200"
        >
          <label className="mb-100">Valor</label>
          <Input left={<div>R$</div>} className="mb-400" type="number" autoFocus={open} />
          <Button full type="submit">
            Retirar agora!
          </Button>
        </form>
      ) : (
        <div className="flex flex-col justify-center h-full">
          <Button full onClick={() => setOpen(true)}>
            Fazer resgate
          </Button>
        </div>
      )}
    </>
  );
};

export const ArrowBack: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button className="hover:animate-bounceX p-300" onClick={onClick}>
    <img src={Back} />
  </button>
);
