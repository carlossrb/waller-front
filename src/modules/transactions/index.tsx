import React from 'react';
import { Container } from './components/Container';
import { DeskHeader } from './components/DeskHeader';
import { StatementChart } from './cards/StatementChart';
import { Withdraw } from './cards/Withdraw';
import { Deposit } from './cards/Deposit';
import { Payment } from './cards/Payment';

import { useQuery, gql } from '@apollo/client';

const BALANCE_QUERY = gql`
  query GetAccountBalance {
    getAccountBalance(id: "2") {
      userEmail
      userName
      accountNumber
      accountTotal
      totalWithdrawn
      accountTotalNoYieldRate
    }
  }
`;

const Transactions = () => {
  const { loading, error, data } = useQuery(BALANCE_QUERY);
  console.log(loading, error, data);
  return (
    <div>
      <DeskHeader />
      <Container>
        <main className="h-full flex flex-col">
          <h1 className="text-font600 font-bold text-primary400">Transações</h1>
          <div className="flex flex-col gap-400 sm:grid sm:grid-cols-2 sm:grid-rows-2 mt-200 h-full text-primary200 font-medium text-font400">
            <section className="h-[368px]">
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
    </div>
  );
};

export default Transactions;
