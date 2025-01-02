import type { Resolvers } from '../types/generated';
import { queryResolvers } from './query.resolvers';

export const resolvers: Resolvers = {
  Query: queryResolvers,
};
