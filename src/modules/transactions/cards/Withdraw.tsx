import React from 'react';
import { Button } from '../../../components/button/Button';
import { Input } from '../../../components/input/Input';

export const Withdraw = () => {
  return (
    <>
      <h2 className="text-center mb-300">Realizar um resgate</h2>
      <p className="text-font300 text-white font-normal">
        Insira o valor desejado para realizar o saque. Lembre-se que o rendimento da sua conta será menor para cada
        valor retirado
      </p>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          console.log('OLAAA');
        }}
        className="flex flex-col items-start justify-center h-full text-gray200 font-normal text-font200"
      >
        <label className="mb-100">Valor</label>
        <Input left={<div>R$</div>} className="mb-400" type="number" />
        <Button full type="submit">
          Retirar agora!
        </Button>
      </form>
    </>
  );
};
