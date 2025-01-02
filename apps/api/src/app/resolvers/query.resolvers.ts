import type { QueryResolvers } from '../types/generated';

export const queryResolvers: QueryResolvers = {
  // TODO: unmock
  me: () => ({
    id: '42',
    email: 'john.doe@example.com',
    displayName: 'John Doe',
  }),
};
