import { gql } from 'graphql-tag';

// TODO: actual schema
export const typeDefs = gql`
  type Query {
    me: User
  }

  type User {
    id: ID!
    email: String!
    displayName: String!
  }
`;
