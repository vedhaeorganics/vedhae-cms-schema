import { z } from "zod";
export declare const AnnouncementSchema: z.ZodObject<{
    page: z.ZodLiteral<"global">;
    section: z.ZodLiteral<"announcement">;
    active: z.ZodBoolean;
    text: z.ZodString;
    speed: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    page: "global";
    section: "announcement";
    active: boolean;
    text: string;
    speed: number;
}, {
    page: "global";
    section: "announcement";
    active: boolean;
    text: string;
    speed?: number | undefined;
}>;
export type Announcement = z.infer<typeof AnnouncementSchema>;
