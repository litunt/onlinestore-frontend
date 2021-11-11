import {Item} from "./item.model";

export interface Order {
  orderId: number,
  userId: number,
  status: string,
  created: Date,
  orderItems: Item[]
}
