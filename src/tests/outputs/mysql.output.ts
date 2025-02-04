import { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export interface UserTest {
  id: Generated<number>;
  userStatus: "CONFIRMED" | "UNCONFIRMED" | null;
}

export interface DB {
  userTest: UserTest;
}
