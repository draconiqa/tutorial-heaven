import type { Resolvers } from '../types/generated';
import { queryResolvers } from './query.resolvers';
import { userResolvers } from './user.resolvers';

export const resolvers: Resolvers = {
  Query: queryResolvers,
  User: userResolvers,
};
