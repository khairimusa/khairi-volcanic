import {
  integer,
  varchar,
  pgTable,
  serial,
  text,
  timestamp,
  jsonb,
  boolean,
} from "drizzle-orm/pg-core";

// Users Table
export const Users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Jobs Table
export const Jobs = pgTable("jobs", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  description: varchar("description", { length: 1000 }).notNull(),
  currency: varchar("currency", { length: 255 }).notNull(),
  minimumSalary: integer("minimum_salary").notNull().default(0),
  maximumSalary: integer("maximum_salary").notNull().default(0),
  jobApplyUrl: varchar("job_apply_url", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
