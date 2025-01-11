import type { QueryResolvers } from '../types/generated';

export const queryResolvers: QueryResolvers = {
  // TODO: unmock
  me: async (_, __, { db }) => {
    const user = await db.users.getByEmail('john.doe@example.com');
    if (!user) {
      throw new Error('User not found');
    }
    return {
      id: user.id.toString(),
      email: user.email,
      displayName: user.display_name ?? '',
    };
  },
};
