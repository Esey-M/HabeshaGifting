import { coffeeProducts } from "./products.coffee";
import { giftingProducts } from "./products.gifting";
import { culturalProducts } from "./products.cultural";
import type { Product } from "./types";

export { budgets, categories } from "./categories";
export type * from "./types";

/** The full catalogue. Add a new file here to grow it. */
export const products: Product[] = [...coffeeProducts, ...culturalProducts, ...giftingProducts];
