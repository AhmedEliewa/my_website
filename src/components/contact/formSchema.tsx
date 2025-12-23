import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  email: z.string().email("Invalid email"),
  message: z.string().min(2, { message: "Message is required" }),
});

export { formSchema };
