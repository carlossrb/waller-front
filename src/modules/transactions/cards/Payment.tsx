import React from 'react';
import { Button } from '../../../components/button/Button';
import { Input } from '../../../components/input/Input';
import { ArrowBack } from './Withdraw';

export const Payment = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <span className="flex flex-row items-center mb-300">
        {open && <ArrowBack onClick={() => setOpen(false)} />}
        <h2 className="text-center w-full">Realizar um pagamento</h2>
      </span>
      <p className="text-font300 text-white font-normal mb-200">
        Faça um pagamento ou transfira um PIX para qualquer banco ou imediatamente e de forma gratuita
      </p>
      {open ? (
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            console.log('OLAAA');
          }}
          className="flex flex-col items-start justify-center h-full text-gray200 font-normal text-font200"
        >
          <label className="mb-100">Conta</label>
          <Input className="mb-400" size="xs" autoFocus={open} />
          <label className="mb-100">Valor</label>
          <Input left={<div>R$</div>} className="mb-400" size="xs" type="number" />
          <Button full type="submit" size="xs">
            Pagar agora!
          </Button>
        </form>
      ) : (
        <div className="flex flex-col justify-center h-full">
          <Button full onClick={() => setOpen(true)}>
            Fazer pagamento
          </Button>
        </div>
      )}
    </>
  );
};
