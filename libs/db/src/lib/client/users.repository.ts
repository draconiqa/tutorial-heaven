import type { Kysely } from 'kysely';
import type { Database } from '../models';

export class UsersRepository {
  constructor(private readonly db: Kysely<Database>) {}

  listAll() {
    return this.db
      .selectFrom('users')
      .orderBy('email', 'asc')
      .select(['id', 'email', 'display_name'])
      .execute();
  }

  getByEmail(email: string) {
    return this.db
      .selectFrom('users')
      .where('email', '=', email)
      .select(['id', 'email', 'display_name'])
      .executeTakeFirst();
  }
}
