/* ======================================================
   SCHEMAS
====================================================== */

// Home
export { ImageAssetSchema } from "./image.schema.js";
export { HeroSectionSchema } from "./hero.schema.js";
export { CardSectionSchema } from "./cardSection.schema.js";
export { HomeDividerSchema } from "./homeDivider.schema.js";
export { FooterSchema } from "./footer.schema.js";
export { AnnouncementSchema } from "./announcement.schema.js";


// Products
export { ProductSchema } from "./product.schema.js";
export { ProductHeroSchema } from "./productHero.schema.js";



// About
export {
  AboutHeroSchema,
  AboutContentSchema,
  AboutImagesSchema,
} from "./about.schema.js";


/* ======================================================
   TYPES
====================================================== */

// Home
export type { ImageAsset } from "./image.schema.js";
export type { HeroSection } from "./hero.schema.js";
export type { CardSection } from "./cardSection.schema.js";
export type { HomeDivider } from "./homeDivider.schema.js";
export type { FooterSection } from "./footer.schema.js";
export type { Announcement } from "./announcement.schema.js";

// Products
export type { Product } from "./product.schema.js";
export type { ProductHero } from "./productHero.schema.js";



// About
export type {
  AboutHero,
  AboutContent,
  AboutImages,
} from "./about.schema.js";