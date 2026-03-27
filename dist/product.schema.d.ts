import { z } from "zod";
export declare const CustomerReviewSchema: z.ZodObject<{
    name: z.ZodString;
    date: z.ZodOptional<z.ZodString>;
    stars: z.ZodNumber;
    review: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    stars: number;
    review: string;
    date?: string | undefined;
}, {
    name: string;
    stars: number;
    review: string;
    date?: string | undefined;
}>;
export type CustomerReview = z.infer<typeof CustomerReviewSchema>;
/**
 * Product schema
 */
export declare const ProductSchema: z.ZodEffects<z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    titleDescription: z.ZodString;
    size: z.ZodString;
    users: z.ZodArray<z.ZodString, "many">;
    categories: z.ZodArray<z.ZodString, "many">;
    internalLink: z.ZodString;
    externalLink: z.ZodOptional<z.ZodString>;
    price: z.ZodNumber;
    discountPercent: z.ZodOptional<z.ZodNumber>;
    priceSubText: z.ZodOptional<z.ZodString>;
    stockStatus: z.ZodBoolean;
    stockVolume: z.ZodNumber;
    imageLinks: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    aboutTitle: z.ZodString;
    aboutDescription: z.ZodString;
    howToUseTitle: z.ZodString;
    howToUseDescription: z.ZodString;
    ingredientsTitle: z.ZodString;
    ingredients: z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodString], null>, "many">;
    reviews: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        date: z.ZodOptional<z.ZodString>;
        stars: z.ZodNumber;
        review: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        stars: number;
        review: string;
        date?: string | undefined;
    }, {
        name: string;
        stars: number;
        review: string;
        date?: string | undefined;
    }>, "many">>;
    active: z.ZodBoolean;
    order: z.ZodNumber;
    createdAt: z.ZodNumber;
    updatedAt: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    title: string;
    active: boolean;
    order: number;
    imageLinks: {
        url: string;
        path: string;
        alt: string;
        desc?: string | undefined;
    }[];
    id: string;
    titleDescription: string;
    size: string;
    users: string[];
    categories: string[];
    internalLink: string;
    price: number;
    stockStatus: boolean;
    stockVolume: number;
    aboutTitle: string;
    aboutDescription: string;
    howToUseTitle: string;
    howToUseDescription: string;
    ingredientsTitle: string;
    ingredients: [string, string][];
    createdAt: number;
    updatedAt: number;
    externalLink?: string | undefined;
    discountPercent?: number | undefined;
    priceSubText?: string | undefined;
    reviews?: {
        name: string;
        stars: number;
        review: string;
        date?: string | undefined;
    }[] | undefined;
}, {
    title: string;
    active: boolean;
    order: number;
    imageLinks: {
        url: string;
        path: string;
        alt: string;
        desc?: string | undefined;
    }[];
    id: string;
    titleDescription: string;
    size: string;
    users: string[];
    categories: string[];
    internalLink: string;
    price: number;
    stockStatus: boolean;
    stockVolume: number;
    aboutTitle: string;
    aboutDescription: string;
    howToUseTitle: string;
    howToUseDescription: string;
    ingredientsTitle: string;
    ingredients: [string, string][];
    createdAt: number;
    updatedAt: number;
    externalLink?: string | undefined;
    discountPercent?: number | undefined;
    priceSubText?: string | undefined;
    reviews?: {
        name: string;
        stars: number;
        review: string;
        date?: string | undefined;
    }[] | undefined;
}>, {
    title: string;
    active: boolean;
    order: number;
    imageLinks: {
        url: string;
        path: string;
        alt: string;
        desc?: string | undefined;
    }[];
    id: string;
    titleDescription: string;
    size: string;
    users: string[];
    categories: string[];
    internalLink: string;
    price: number;
    stockStatus: boolean;
    stockVolume: number;
    aboutTitle: string;
    aboutDescription: string;
    howToUseTitle: string;
    howToUseDescription: string;
    ingredientsTitle: string;
    ingredients: [string, string][];
    createdAt: number;
    updatedAt: number;
    externalLink?: string | undefined;
    discountPercent?: number | undefined;
    priceSubText?: string | undefined;
    reviews?: {
        name: string;
        stars: number;
        review: string;
        date?: string | undefined;
    }[] | undefined;
}, {
    title: string;
    active: boolean;
    order: number;
    imageLinks: {
        url: string;
        path: string;
        alt: string;
        desc?: string | undefined;
    }[];
    id: string;
    titleDescription: string;
    size: string;
    users: string[];
    categories: string[];
    internalLink: string;
    price: number;
    stockStatus: boolean;
    stockVolume: number;
    aboutTitle: string;
    aboutDescription: string;
    howToUseTitle: string;
    howToUseDescription: string;
    ingredientsTitle: string;
    ingredients: [string, string][];
    createdAt: number;
    updatedAt: number;
    externalLink?: string | undefined;
    discountPercent?: number | undefined;
    priceSubText?: string | undefined;
    reviews?: {
        name: string;
        stars: number;
        review: string;
        date?: string | undefined;
    }[] | undefined;
}>;
export type Product = z.infer<typeof ProductSchema>;
