import { Kysely, PostgresDialect } from 'kysely';
import pg from 'pg';
import type { Database } from '../models';
import { UsersRepository } from './users.repository';

export function createDBClient(
  connectionString = 'postgres://admin:admin@localhost:5432/th_db',
) {
  const db = new Kysely<Database>({
    dialect: new PostgresDialect({
      pool: new pg.Pool({
        connectionString,
      }),
    }),
  });

  return {
    users: new UsersRepository(db),
  };
}

export type DBClient = ReturnType<typeof createDBClient>;
