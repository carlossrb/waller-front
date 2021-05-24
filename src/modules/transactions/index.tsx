import React from 'react';
import { Container } from './components/Container';
import { DeskHeader } from './components/DeskHeader';
import { StatementChart } from './cards/StatementChart';
import { Withdraw } from './cards/Withdraw';
import { Deposit } from './cards/Deposit';
import { Payment } from './cards/Payment';

import { useQuery, gql } from '@apollo/client';
import { Query } from '../../graphql/__generated__/types';

//Id fixo (apenas teste). TODO: inserir sistema de autorização/autenticação
export const ACCOUNT_ID = '2';

const BALANCE_QUERY = gql`
  query GetAccountBalance($ID: String!) {
    getAccountBalance(id: $ID) {
      userEmail
      userName
      accountNumber
      accountTotal
      totalWithdrawn
      accountTotalNoYieldRate
    }
  }
`;

type AccountBalanceContextProps = {
  userEmail?: string;
  userName?: string;
  accountNumber?: string;
  accountTotal?: number;
  totalWithdrawn?: number;
  accountTotalNoYieldRate?: number;
};

const AccountBalanceContext = React.createContext<AccountBalanceContextProps>({
  userEmail: '',
  userName: '',
  accountNumber: '',
  accountTotal: 0,
  totalWithdrawn: 0,
  accountTotalNoYieldRate: 0,
});

export const useAccountBalanceContext = () => React.useContext(AccountBalanceContext);

const Transactions = () => {
  const { loading, data } = useQuery<Query>(BALANCE_QUERY, { variables: { ID: ACCOUNT_ID } });

  const yieldRate = () => {
    return ((data?.getAccountBalance?.accountTotal || 0) - (data?.getAccountBalance?.accountTotalNoYieldRate || 0))
      .toFixed(2)
      .replace('.', ',');
  };

  return (
    <>
      {loading ? (
        <ScreenLoad />
      ) : (
        <AccountBalanceContext.Provider value={{ ...data?.getAccountBalance }}>
          <DeskHeader />
          <Container>
            <div className="text-font300 text-inputMoneyColor100 flex flex-col sm:flex-row justify-between">
              <span>
                Olá, <strong>{data?.getAccountBalance.userName}</strong>
              </span>
              <span>
                Seus rendimentos até agora: <strong>R$ {yieldRate()}</strong>
              </span>
            </div>
            <main className="h-full flex flex-col">
              <h1 className="text-font600 font-bold text-primary400">Transações</h1>
              <div className="flex flex-col gap-400 sm:grid sm:grid-cols-2 sm:grid-rows-2 mt-200 h-full text-primary200 font-medium text-font400">
                <section className="h-[325px]">
                  <StatementChart />
                </section>
                <section className="flex flex-col">
                  <Withdraw />
                  <div className="border-gray300 border-b sm:hidden py-300" />
                </section>
                <section className="flex flex-col">
                  <Payment />
                  <div className="border-gray300 border-b sm:hidden py-300" />
                </section>
                <section className="flex flex-col">
                  <Deposit />
                </section>
              </div>
            </main>
          </Container>
        </AccountBalanceContext.Provider>
      )}
    </>
  );
};

const ScreenLoad = () => {
  return (
    <div className="absolute w-full h-full">
      <div className="flex flex-col h-full w-full items-center justify-center bg-backgroundColor">
        <div className="loader z-50" />
        <span className="font-medium text-font500 text-inputMoneyColor">Carregando...</span>
      </div>
    </div>
  );
};
export default Transactions;
