import React from 'react';
import { Button } from '../../../components/button/Button';
import { Input } from '../../../components/input/Input';
import Back from 'url:../components/images/arrow-left.svg';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { ACCOUNT_ID, useAccountBalanceContext } from '..';
import { WithdrawalInput, WithdrawalPayload } from '../../../graphql/__generated__/types';

const WITHDRAWAL_MUTATION = gql`
  mutation MakeWithdrawal($input: WithdrawalInput!) {
    makeWithdrawal(input: $input) {
      account {
        yields
        accountTotal
        totalWithdrawal
      }
    }
  }
`;

export const Withdraw = () => {
  const [open, setOpen] = React.useState(false);
  const [amount, setAmount] = React.useState('');
  const [statusMsg, setStatusMsg] = React.useState(false);
  const { handleDynamicValues } = useAccountBalanceContext();

  const [makeWithdrawal, { loading }] = useMutation<WithdrawalPayload, { input: WithdrawalInput }>(
    WITHDRAWAL_MUTATION,
    {
      variables: { input: { id: ACCOUNT_ID, amount } },
    }
  );

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
          }}
          className="flex flex-col items-start justify-center h-full text-gray200 font-normal text-font200"
        >
          <label className="mb-100">Valor</label>
          <Input
            disabled={loading}
            left={<div>R$</div>}
            className="mb-400"
            type="number"
            autoFocus={open}
            value={amount}
            onChange={setAmount}
          />
          <Button
            loading={loading}
            full
            type="submit"
            onClick={async () => {
              const withdrawal = await makeWithdrawal();
              handleDynamicValues!({ ...(withdrawal as any).data?.makeWithdrawal.account });
              setStatusMsg(true);
              setTimeout(() => setStatusMsg(false), 4000);
            }}
          >
            Retirar agora!
          </Button>
          <p className="text-font200 font-normal text-inputMoneyColor100 mt-100 h-[22px]">
            {statusMsg && 'Retirada efetuada com sucesso!'}
          </p>
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
