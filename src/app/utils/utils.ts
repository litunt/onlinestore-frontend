import {Product} from "../models/product.model";

export const CATEGORIES = ['FOOD', 'CLOTHING', 'TOYS', 'ACCESSORIES']
export const PET_TYPES = ['CAT', 'DOG', 'BIRD', 'ALL']

export const getImageUrl = (product: Product) => {
  if (product.productId === 1) {
    return `/assets/products/${product.petType.toLowerCase()}/${product.category.toLowerCase()}/${product.productId}.png`;
  }
  return `/assets/products/${product.petType.toLowerCase()}/default.png`;
}
