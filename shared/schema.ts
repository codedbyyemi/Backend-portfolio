import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Even though we are using MemStorage/Static data, we define schemas here for type consistency
// if we were to move to a DB later.

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
});

export const insertMessageSchema = createInsertSchema(messages).pick({
  name: true,
  email: true,
  message: true,
});

export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Message = typeof messages.$inferSelect;

// Static Content Types (No DB tables needed, just Zod/TS types)
export const projectSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  techStack: z.array(z.string()),
  imageUrl: z.string(),
  demoLink: z.string().optional(),
});
export type Project = z.infer<typeof projectSchema>;

export const skillSchema = z.object({
  category: z.string(),
  items: z.array(z.string()),
});
export type Skill = z.infer<typeof skillSchema>;

export const experienceSchema = z.object({
  id: z.number(),
  role: z.string(),
  company: z.string(),
  period: z.string(),
  description: z.array(z.string()),
});
export type Experience = z.infer<typeof experienceSchema>;
