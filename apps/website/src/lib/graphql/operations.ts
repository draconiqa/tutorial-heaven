import { graphql } from './generated';

export const PROFILE_QUERY = graphql(`
  query Profile {
    me {
      email
      displayName
    }
  }
`);
