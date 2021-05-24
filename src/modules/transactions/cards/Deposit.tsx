import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import { ACCOUNT_ID, useAccountBalanceContext } from '..';
import { Button } from '../../../components/button/Button';
import { Input } from '../../../components/input/Input';
import { DepositInput, DepositPayload } from '../../../graphql/__generated__/types';

const DEPOSIT_MUTATION = gql`
  mutation MakeDeposit($input: DepositInput!) {
    makeDeposit(input: $input) {
      account {
        yields
        accountTotal
        totalWithdrawn
      }
    }
  }
`;

export const Deposit = () => {
  const [amount, setAmount] = React.useState('');
  const [statusMsg, setStatusMsg] = React.useState(false);
  const { handleDynamicValues } = useAccountBalanceContext();

  const [makeDeposit, { loading }] = useMutation<DepositPayload, { input: DepositInput }>(DEPOSIT_MUTATION, {
    variables: { input: { id: ACCOUNT_ID, amount } },
  });

  return (
    <>
      <h2 className="text-center mb-300">Realizar um depósito</h2>
      <p className="text-font300 text-white font-normal">
        Aqui você pode colocar guardar seu dinheiro para que ele possa render na sua conta
      </p>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
        }}
        className="flex flex-col items-start justify-center h-full text-gray200 font-normal text-font200"
      >
        <label className="mb-100">Valor</label>
        <Input
          left={<div>R$</div>}
          className="mb-400"
          type="number"
          value={amount}
          onChange={setAmount}
          disabled={loading}
        />
        <Button
          loading={loading}
          full
          type="submit"
          kind="secondary"
          onClick={async () => {
            const makedeposit = await makeDeposit();
            handleDynamicValues!({ ...(makedeposit as any).data?.makeDeposit.account });
            setStatusMsg(true);
            setTimeout(() => setStatusMsg(false), 4000);
          }}
        >
          Depositar agora!
        </Button>
        <p className="text-font200 font-normal text-inputMoneyColor100 mt-100 h-[22px]">
          {statusMsg && 'Depósito efetuado com sucesso!'}
        </p>
      </form>
    </>
  );
};
