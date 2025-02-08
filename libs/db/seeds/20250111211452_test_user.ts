import type { Kysely } from 'kysely';
import { hash } from '../src/lib/utils/hash';

export async function seed(db: Kysely<any>): Promise<void> {
  const user = {
    email: 'john.doe@example.com',
    displayName: 'John Doe',
    password: 'password',
  };

  if (process.env['NODE_ENV'] === 'production') {
    console.warn(`Skipping test user ${user.email} in production environment`);
    return;
  }

  const existingUser = await db
    .selectFrom('users')
    .where('email', '=', user.email)
    .select('id')
    .executeTakeFirst();
  if (existingUser) {
    console.warn(
      `Test user ${user.email} already exists (ID: ${existingUser.id})`,
    );
    return;
  }

  await db
    .insertInto('users')
    .values({
      email: user.email,
      display_name: user.displayName,
      password_hash: hash(user.password),
    })
    .execute();
}
