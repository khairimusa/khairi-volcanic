import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

const dbUrl = process.env.DATABASE_URL as string;

const sql = neon(dbUrl);

export const db = drizzle(sql, { schema });
