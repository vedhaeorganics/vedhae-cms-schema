import { z } from "zod";
import { ImageAssetSchema } from "./image.schema.js";

export const CustomerReviewSchema = z.object({
  name: z.string().min(1),
  date: z.string().optional(),
  stars: z.number().min(0).max(5),
  review: z.string().min(1),
});

export type CustomerReview = z.infer<typeof CustomerReviewSchema>;

/**
 * Product schema
 */
export const ProductSchema = z
  .object({
    /* =========================
       Core identity
    ========================= */
    id: z.string(),

    title: z.string().min(1),
    titleDescription: z.string().min(1),
    size: z.string().min(1),

    /* =========================
       Audience & classification
    ========================= */
    users: z.array(z.string()).min(1),
    categories: z.array(z.string()).min(1),

    /* =========================
       Navigation
    ========================= */
    internalLink: z.string().startsWith("/"),
    externalLink: z.string().url().optional(),

    /* =========================
       Pricing
    ========================= */
    price: z.number().nonnegative(),

    discountPercent: z
      .number()
      .min(0)
      .max(100)
      .optional(),

    priceSubText: z.string().optional(),

    /* =========================
       Stock
    ========================= */
    stockStatus: z.boolean(),
    stockVolume: z.number().int().nonnegative(),

    /* =========================
       Media
    ========================= */
    imageLinks: z.array(ImageAssetSchema).min(1),

    /* =========================
       Content sections
    ========================= */
    aboutTitle: z.string().min(1),
    aboutDescription: z.string().min(1),

    howToUseTitle: z.string().min(1),
    howToUseDescription: z.string().min(1),

    ingredientsTitle: z.string().min(1),
    ingredients: z.array(
      z.tuple([z.string(), z.string()])
    ).min(1),

    /* =========================
       Reviews
    ========================= */
    reviews: z.array(CustomerReviewSchema).optional(),

    /* =========================
       System
    ========================= */
    active: z.boolean(),
    order: z.number(),

    createdAt: z.number(),
    updatedAt: z.number(),
  })
  .superRefine((data, ctx) => {
    // stock logic
    if (!data.stockStatus && data.stockVolume !== 0) {
      ctx.addIssue({
        path: ["stockVolume"],
        message: "stockVolume must be 0 when stockStatus is false",
        code: z.ZodIssueCode.custom,
      });
    }

    // discount sanity
    if (data.discountPercent && data.discountPercent > 0 && data.price === 0) {
      ctx.addIssue({
        path: ["discountPercent"],
        message: "Discount cannot be applied when price is 0",
        code: z.ZodIssueCode.custom,
      });
    }
  });

export type Product = z.infer<typeof ProductSchema>;