// @generated
// This file is automatically generated by Kanel. Do not modify manually.
import type { ColumnType, Insertable, Selectable, Updateable } from 'kysely';

/** Identifier type for public.users */
export type UserId = number & { __brand: 'UserId' };

/** Represents the table public.users */
export default interface UserModelTable {
  id: ColumnType<UserId, UserId | undefined, UserId>;

  email: ColumnType<string, string, string>;

  display_name: ColumnType<string | null, string | null, string | null>;

  password_hash: ColumnType<string, string, string>;

  created_at: ColumnType<Date, Date | string | undefined, Date | string>;
}

export type UserModel = Selectable<UserModelTable>;

export type NewUserModel = Insertable<UserModelTable>;

export type UserModelUpdate = Updateable<UserModelTable>;
