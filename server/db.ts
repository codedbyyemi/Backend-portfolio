import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// We use MemStorage by default, but this file is required by the template structure.
// If DATABASE_URL is not set, we won't export a valid db connection, which is fine for MemStorage.

export const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL || "postgres://user:password@localhost:5432/db" 
});
export const db = drizzle(pool, { schema });
