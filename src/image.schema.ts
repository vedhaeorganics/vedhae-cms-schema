import { z } from "zod";

export const ImageAssetSchema = z.object({
  url: z.string().url(),
  path: z.string(),
  alt: z.string(),
  desc: z.string().min(1).optional()
});

export type ImageAsset = z.infer<typeof ImageAssetSchema>;