import { coffeeProducts } from "./products.coffee";
import { giftingProducts } from "./products.gifting";
import { culturalProducts } from "./products.cultural";
import { wifeProducts } from "./products.wife";
import { momProducts } from "./products.mom";
import { boyfriendProducts } from "./products.boyfriend";
import { husbandProducts } from "./products.husband";
import { brotherProducts } from "./products.brother";
import { sisterProducts } from "./products.sister";
import { daughterProducts } from "./products.daughter";
import { friendProducts } from "./products.friend";
import { youngGirlProducts } from "./products.young-girl";
import type { Product } from "./types";

export { budgets, categories } from "./categories";
export type * from "./types";

/** The full catalogue. Add a new file here to grow it. */
export const products: Product[] = [
  ...coffeeProducts,
  ...culturalProducts,
  ...giftingProducts,
  ...wifeProducts,
  ...momProducts,
  ...boyfriendProducts,
  ...husbandProducts,
  ...brotherProducts,
  ...sisterProducts,
  ...daughterProducts,
  ...friendProducts,
  ...youngGirlProducts,
];
