import { inject } from '@angular/core';
import {
  type ApolloClientOptions,
  InMemoryCache,
  type NormalizedCacheObject,
} from '@apollo/client';
import { HttpLink } from 'apollo-angular/http';

const uri = 'http://localhost:3333/graphql'; // TODO: dynamic environment variable

export function apolloOptionsFactory(): ApolloClientOptions<NormalizedCacheObject> {
  const httpLink = inject(HttpLink);

  return {
    link: httpLink.create({
      // operation name in URL makes debugging easier in browser network tab
      uri: ({ operationName }) => `${uri}?${operationName}`,
    }),
    cache: new InMemoryCache(),
  };
}
