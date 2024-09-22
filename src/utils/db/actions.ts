import { db } from "./dbConfig";
import { eq, sql, and, desc, ne } from "drizzle-orm";
import { Jobs, Users } from "./schema";

export async function createUser(email: string, name: string) {
  try {
    const [user] = await db
      .insert(Users)
      .values({ email, name })
      .returning()
      .execute();
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
}

export async function getUserByEmail(email: string) {
  try {
    const [user] = await db
      .select()
      .from(Users)
      .where(eq(Users.email, email))
      .execute();
    return user;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    return null;
  }
}

export async function getJobs(limit: number = 10) {
  try {
    const jobs = await db
      .select()
      .from(Jobs)
      .orderBy(desc(Jobs.createdAt))
      .limit(limit)
      .execute();
    return jobs;
  } catch (error) {
    console.error("Error fetching recent reports:", error);
    return [];
  }
}
