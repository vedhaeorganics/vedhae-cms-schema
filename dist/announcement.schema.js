import { z } from "zod";
export const AnnouncementSchema = z.object({
    page: z.literal("global"),
    section: z.literal("announcement"),
    active: z.boolean(),
    text: z.string().min(1),
    speed: z.number().default(30), // seconds
});
