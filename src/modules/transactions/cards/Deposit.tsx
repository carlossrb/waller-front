import React from 'react';
import { Button } from '../../../components/button/Button';
import { Input } from '../../../components/input/Input';

export const Deposit = () => {
  return (
    <>
      <h2 className="text-center mb-300">Realizar um depósito</h2>
      <p className="text-font300 text-white font-normal">
        Aqui você pode colocar guardar seu dinheiro para que ele possa render na sua conta
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
        <Button full type="submit" kind="secondary">
          Depositar agora!
        </Button>
      </form>
    </>
  );
};
