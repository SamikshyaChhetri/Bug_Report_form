import { z } from "zod";

export const createSchema = z.object({
  username: z.string().min(3, "Username must be atleast 3 characters long"),
  email: z.string().email("Please provide a valid email"),
  contact: z.string().min(7).max(15),
  application: z.string().min(1),
  message: z.string().min(10).max(100),
});
