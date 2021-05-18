import React from 'react';
import { Button } from '../../components/button/Button';
import { Container } from './components/Container';
import { DeskHeader } from './components/DeskHeader';
import { StatementChart } from './components/StatementChart';

const Payments = () => {
  return (
    <div>
      <DeskHeader />
      <Container>
        <main className="h-full flex flex-col">
          <h1 className="text-font600 font-bold text-primary400">Transações</h1>
          {/* <StatementChart /> */}
          <div className="flex flex-col gap-400 sm:grid sm:grid-cols-2 sm:grid-rows-2 mt-200 h-full text-primary200 font-medium text-font400">
            <section className="h-[300px]">
              <h2 className="text-center">Entradas e saídas</h2>
              <StatementChart />
            </section>
            <section>
              <h2 className="text-center">Realizar um depósito</h2>
              <p className="text-font300 text-white font-normal">
                Aqui você pode colocar guardar seu dinheiro para que ele possa render na sua conta
              </p>
            </section>
            <section>
              <h2 className="text-center">Realizar um resgate</h2>
              <p className="text-font300 text-white font-normal">Caso necessite retirar um valor, faça aqui</p>
            </section>
            <section>
              <h2 className="text-center">Realizar um pagamento</h2>
              <p className="text-font300 text-white font-normal">
                Faça um pagamento PIX para qualquer banco de forma imediata
              </p>
              <Button full>Teste do btn</Button>
            </section>
          </div>
        </main>
      </Container>
    </div>
  );
};

export default Payments;
