import {Product} from "./product.model";

export interface Item {
  itemId?: number | null,
  containerId?: number | null,
  product: Product,
  quantity: number
}
