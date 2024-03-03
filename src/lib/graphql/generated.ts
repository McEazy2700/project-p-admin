export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthTokenType = {
  __typename?: 'AuthTokenType';
  refreshToken: Scalars['String']['output'];
  token: Scalars['String']['output'];
  user: UserType;
};

export type EmailPasswordRegisterInput = {
  email: Scalars['String']['input'];
  password1: Scalars['String']['input'];
  password2: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  emailPasswordLogin: AuthTokenType;
  emailPasswordRegister: UserType;
};


export type MutationEmailPasswordLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationEmailPasswordRegisterArgs = {
  input: EmailPasswordRegisterInput;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<UserType>;
  version: Scalars['String']['output'];
};

export type UserType = {
  __typename?: 'UserType';
  email: Scalars['String']['output'];
};

export type EmailPasswordRegisterMutationVariables = Exact<{
  input: EmailPasswordRegisterInput;
}>;


export type EmailPasswordRegisterMutation = { __typename?: 'Mutation', emailPasswordRegister: { __typename?: 'UserType', email: string } };

export type EmailPasswordLoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type EmailPasswordLoginMutation = { __typename?: 'Mutation', emailPasswordLogin: { __typename?: 'AuthTokenType', token: string, refreshToken: string, user: { __typename?: 'UserType', email: string } } };
