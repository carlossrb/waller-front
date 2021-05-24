import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { ACCOUNT_ID, useAccountBalanceContext } from '..';
import { Button } from '../../../components/button/Button';
import { Input } from '../../../components/input/Input';
import { PaymentInput, PaymentPayload } from '../../../graphql/__generated__/types';
import { ArrowBack } from './Withdrawal';

const PAYMENT_MUTATION = gql`
  mutation MakePayment($input: PaymentInput!) {
    makePayment(input: $input) {
      account {
        yields
        accountTotal
        totalWithdrawal
      }
    }
  }
`;

export const Payment = () => {
  const [open, setOpen] = React.useState(false);
  const [amount, setAmount] = React.useState('');
  const [target, setTarget] = React.useState('');
  const [statusMsg, setStatusMsg] = React.useState(false);
  const { handleDynamicValues } = useAccountBalanceContext();

  const [makePayment, { loading }] = useMutation<PaymentPayload, { input: PaymentInput }>(PAYMENT_MUTATION, {
    variables: { input: { id: ACCOUNT_ID, amount, target } },
  });

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
          }}
          className="flex flex-col items-start justify-center h-full text-gray200 font-normal text-font200"
        >
          <label className="mb-100">Conta destino</label>
          <Input className="mb-400" size="xs" autoFocus={open} onChange={setTarget} disabled={loading} value={target} />
          <label className="mb-100">Valor</label>
          <Input
            left={<div>R$</div>}
            className="mb-400"
            size="xs"
            type="number"
            onChange={setAmount}
            disabled={loading}
            value={amount}
          />
          <Button
            loading={loading}
            full
            type="submit"
            size="xs"
            onClick={async () => {
              if (target && amount) {
                const makepayment = await makePayment();
                handleDynamicValues!({ ...(makepayment as any).data?.makePayment.account });
                setStatusMsg(true);
                setTimeout(() => setStatusMsg(false), 4000);
              }
            }}
          >
            Pagar agora!
          </Button>
          <p className="text-font200 font-normal text-inputMoneyColor100 mt-100 h-[22px]">
            {statusMsg && 'Pagamento efetuado com sucesso!'}
          </p>
        </form>
      ) : (
        <div className="flex flex-col justify-center h-full">
          <Button
            full
            onClick={() => {
              setOpen(true);
            }}
          >
            Fazer pagamento
          </Button>
        </div>
      )}
    </>
  );
};
