import { createPool } from "slonik";

export const db = await createPool(
  "postgres://user:password@localhost:5432/db"
);
