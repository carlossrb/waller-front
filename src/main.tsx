import ReactDOM from 'react-dom';
import Transactions from './modules/transactions';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import React from 'react';
import { ApolloProvider } from '@apollo/client/react';

import './styles.css';

const client = new ApolloClient({
  uri: 'localhost:4000;graphql',
  cache: new InMemoryCache(),
});

const development = process.env.NODE_ENV === 'development';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Transactions />
  </ApolloProvider>,
  document.getElementById('root')
);
