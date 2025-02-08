/* DO NOT EDIT MANUALLY - this file is generated from apps/cms/graphql.config.ts using GraphQL Code Generator */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  displayName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type ProfileQueryVariables = Exact<{ [key: string]: never }>;

export type ProfileQuery = {
  __typename?: 'Query';
  me?: {
    __typename?: 'User';
    id: string;
    email: string;
    displayName: string;
  } | null;
};

export const ProfileDocument = gql`
  query Profile {
    me {
      id
      email
      displayName
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class ProfileGQL extends Apollo.Query<
  ProfileQuery,
  ProfileQueryVariables
> {
  document = ProfileDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
