import type { UserResolvers } from '../types/generated';

export const userResolvers: UserResolvers = {
  id: ({ id }) => id.toString(),

  displayName: ({ display_name }) => display_name ?? '',
};
