import { HttpLink } from '@apollo/client';
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from '@apollo/experimental-nextjs-app-support';

// TODO: inject API URL using environment variables
const uri = 'http://localhost:3333/graphql';

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({ uri }), // { cache: 'no-store' } causes build error: https://github.com/vercel/next.js/pull/74145
  });
});
