export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['ID'];
  userEmail: Scalars['String'];
  userName: Scalars['String'];
  accountNumber: Scalars['String'];
  operationDate: Scalars['String'];
  accountTotal: Scalars['Float'];
  accountTotalNoYieldRate: Scalars['Float'];
  yields: Scalars['Float'];
  totalWithdrawn: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DepositInput = {
  id: Scalars['ID'];
  amount: Scalars['String'];
};

export type DepositPayload = {
  __typename?: 'DepositPayload';
  account?: Maybe<Account>;
};

export type Mutation = {
  __typename?: 'Mutation';
  makeDeposit: DepositPayload;
  makePayment: PaymentPayload;
  makeWithdrawal: WithdrawalPayload;
};

export type MutationMakeDepositArgs = {
  input: DepositInput;
};

export type MutationMakePaymentArgs = {
  input: PaymentInput;
};

export type MutationMakeWithdrawalArgs = {
  input: WithdrawalInput;
};

export type PaymentInput = {
  id: Scalars['ID'];
  amount: Scalars['String'];
  target: Scalars['String'];
};

export type PaymentPayload = {
  __typename?: 'PaymentPayload';
  account?: Maybe<Account>;
};

export type Query = {
  __typename?: 'Query';
  getAccountBalance: Account;
};

export type QueryGetAccountBalanceArgs = {
  id: Scalars['String'];
};

export type WithdrawalInput = {
  id: Scalars['ID'];
  amount: Scalars['String'];
};

export type WithdrawalPayload = {
  __typename?: 'WithdrawalPayload';
  account?: Maybe<Account>;
};
