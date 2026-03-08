import { z } from "zod";
export declare const HeroSectionSchema: z.ZodObject<{
    page: z.ZodLiteral<"home">;
    section: z.ZodLiteral<"hero">;
    active: z.ZodBoolean;
    tagline: z.ZodString;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    ctaText: z.ZodString;
    ctaLink: z.ZodString;
    imageLinks: z.ZodDefault<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        path: z.ZodString;
        alt: z.ZodString;
        desc: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        path: string;
        alt: string;
        desc?: string | undefined;
    }, {
        url: string;
        path: string;
        alt: string;
        desc?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    title: string;
    page: "home";
    section: "hero";
    active: boolean;
    tagline: string;
    ctaText: string;
    ctaLink: string;
    imageLinks: {
        url: string;
        path: string;
        alt: string;
        desc?: string | undefined;
    }[];
    description?: string | undefined;
}, {
    title: string;
    page: "home";
    section: "hero";
    active: boolean;
    tagline: string;
    ctaText: string;
    ctaLink: string;
    description?: string | undefined;
    imageLinks?: {
        url: string;
        path: string;
        alt: string;
        desc?: string | undefined;
    }[] | undefined;
}>;
export type HeroSection = z.infer<typeof HeroSectionSchema>;
