# db

**Type-safe database client and models.**

Implemented with [Kysely](https://kysely.dev/), models are generated from PostgreSQL using [Kanel](https://kristiandupont.github.io/kanel/).

## Usage

```ts
import { type DBClient, type User, createDBClient } from '@th/db';

const db: DBClient = createDBClient();

const users: User[] = await db.users.listAll();
```
