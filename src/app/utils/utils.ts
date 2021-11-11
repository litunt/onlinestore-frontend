import {Product} from "../models/product.model";

export const CATEGORIES = ['FOOD', 'CLOTHING', 'TOYS', 'ACCESSORIES']
export const PET_TYPES = ['CAT', 'DOG', 'BIRD', 'ALL']
export const SORTING_OPTIONS = [{by: 'price', dir: 'asc', title: 'Price lowest to highest'},
                                {by: 'price', dir: 'desc', title: 'Price highest to lowest'},
                                {by: 'name', dir: 'asc', title: 'Name A-Z'},
                                {by: 'name', dir: 'desc', title: 'Name Z-A'}]

export const getImageUrl = (product: Product) => {
  if (product.productId === 1) {
    return `/assets/products/${product.petType.toLowerCase()}/${product.category.toLowerCase()}/${product.productId}.png`;
  }
  return `/assets/products/${product.petType.toLowerCase()}/default.png`;
}
