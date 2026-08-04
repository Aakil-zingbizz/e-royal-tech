import productsData from "@/data/products.json";
import { Product } from "@/types/product";

const products: Product[] = productsData as Product[];

/**
 * Returns all products
 */
export function getAllProducts(): Product[] {
  return products;
}

/**
 * Returns all valid product slugs for static generation
 */
export function getAllProductSlugs(): string[] {
  return products.map((product) => product.slug);
}

/**
 * Retrieves a single product by slug or alias
 */
export function getProductBySlug(slug: string): Product | undefined {
  const normalizedSlug = slug.toLowerCase().trim();
  return products.find(
    (product) =>
      product.slug.toLowerCase() === normalizedSlug ||
      product.id.toLowerCase() === normalizedSlug ||
      product.aliases?.some((alias) => alias.toLowerCase() === normalizedSlug)
  );
}
