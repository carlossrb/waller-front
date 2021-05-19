import React from 'react';
import { Container } from './components/Container';
import { DeskHeader } from './components/DeskHeader';
import { StatementChart } from './cards/StatementChart';
import { Withdraw } from './cards/Withdraw';
import { Deposit } from './cards/Deposit';
import { Payment } from './cards/Payment';

const Transactions = () => {
  return (
    <div>
      <DeskHeader />
      <Container>
        <main className="h-full flex flex-col">
          <h1 className="text-font600 font-bold text-primary400">Transações</h1>
          <div className="flex flex-col gap-400 sm:grid sm:grid-cols-2 sm:grid-rows-2 mt-200 h-full text-primary200 font-medium text-font400">
            <section className="h-[300px]">
              <StatementChart />
            </section>
            <section className="flex flex-col">
              <Deposit />
            </section>
            <section className="flex flex-col">
              <Withdraw />
            </section>
            <section className="flex flex-col">
              <Payment />
            </section>
          </div>
        </main>
      </Container>
    </div>
  );
};

export default Transactions;
