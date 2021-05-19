import React from 'react';
import { Button } from '../../../components/button/Button';
import { Input } from '../../../components/input/Input';

export const Payment = () => {
  return (
    <>
      <h2 className="text-center mb-300">Realizar um pagamento</h2>
      <p className="text-font300 text-white font-normal">
        Faça um pagamento ou transfira um PIX para qualquer banco ou imediatamente e de forma gratuita
      </p>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          console.log('OLAAA');
        }}
        className="flex flex-col items-start justify-center h-full text-gray200 font-normal text-font200"
      >
        <label className="mb-100">Conta</label>
        <Input className="mb-400" size="xs" />
        <label className="mb-100">Valor</label>
        <Input left={<div>R$</div>} className="mb-400" size="xs" type="number" />
        <Button full type="submit" size="xs">
          Pagar agora!
        </Button>
      </form>
    </>
  );
};
