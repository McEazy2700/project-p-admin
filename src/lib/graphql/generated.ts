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
  createStore: StoreType;
  emailPasswordLogin: AuthTokenType;
  emailPasswordRegister: UserType;
};


export type MutationCreateStoreArgs = {
  input: StoreInput;
};


export type MutationEmailPasswordLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationEmailPasswordRegisterArgs = {
  input: EmailPasswordRegisterInput;
};

export type PaginatedStoreFilter = {
  filter?: InputMaybe<StoreFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<UserType>;
  stores: Array<StoreType>;
  version: Scalars['String']['output'];
};


export type QueryStoresArgs = {
  opts?: InputMaybe<PaginatedStoreFilter>;
};

export type StoreFilter = {
  creatorId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type StoreInput = {
  creatorId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type StoreType = {
  __typename?: 'StoreType';
  creator: UserType;
  dateAdded: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type UserType = {
  __typename?: 'UserType';
  dateAdded: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
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

export type StoresQueryVariables = Exact<{
  opts?: InputMaybe<PaginatedStoreFilter>;
}>;


export type StoresQuery = { __typename?: 'Query', stores: Array<{ __typename?: 'StoreType', dateAdded: string, description?: string | null, id: string, name: string, creator: { __typename?: 'UserType', dateAdded: string, email: string, id: string } }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'UserType', dateAdded: string, email: string, id: string } | null };
