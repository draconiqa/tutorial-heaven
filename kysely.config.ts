import { PostgresDialect } from 'kysely';
import { defineConfig, getKnexTimestampPrefix } from 'kysely-ctl';
import { Pool } from 'pg';

export default defineConfig({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: 'postgres://admin:admin@localhost:5432/th_db',
    }),
  }),
  migrations: {
    getMigrationPrefix: getKnexTimestampPrefix,
  },
});
