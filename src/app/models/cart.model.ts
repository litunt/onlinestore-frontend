import {Item} from "./item.model";

export interface Cart {
  cartId?: number | null,
  userId: number | null,
  created?: Date,
  cartItems: Item[]
}
