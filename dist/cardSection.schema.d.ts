import { z } from "zod";
export declare const CardItemSchema: z.ZodObject<{
    name: z.ZodString;
    link: z.ZodString;
    order: z.ZodNumber;
    image: z.ZodObject<{
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
    }>;
}, "strip", z.ZodTypeAny, {
    name: string;
    link: string;
    order: number;
    image: {
        url: string;
        path: string;
        alt: string;
        desc?: string | undefined;
    };
}, {
    name: string;
    link: string;
    order: number;
    image: {
        url: string;
        path: string;
        alt: string;
        desc?: string | undefined;
    };
}>;
export declare const CardSectionSchema: z.ZodObject<{
    page: z.ZodLiteral<"home">;
    section: z.ZodEnum<["one", "two"]>;
    title: z.ZodString;
    order: z.ZodNumber;
    active: z.ZodBoolean;
    items: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        link: z.ZodString;
        order: z.ZodNumber;
        image: z.ZodObject<{
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
        }>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        link: string;
        order: number;
        image: {
            url: string;
            path: string;
            alt: string;
            desc?: string | undefined;
        };
    }, {
        name: string;
        link: string;
        order: number;
        image: {
            url: string;
            path: string;
            alt: string;
            desc?: string | undefined;
        };
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    title: string;
    page: "home";
    section: "one" | "two";
    active: boolean;
    order: number;
    items: {
        name: string;
        link: string;
        order: number;
        image: {
            url: string;
            path: string;
            alt: string;
            desc?: string | undefined;
        };
    }[];
}, {
    title: string;
    page: "home";
    section: "one" | "two";
    active: boolean;
    order: number;
    items: {
        name: string;
        link: string;
        order: number;
        image: {
            url: string;
            path: string;
            alt: string;
            desc?: string | undefined;
        };
    }[];
}>;
export type CardSection = z.infer<typeof CardSectionSchema>;
