import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Cart} from "../models/cart.model";
import {Order} from "../models/order.model";

@Injectable()
export class OrdersService {

  private allOrdersUrl: string = '/api/orders';

  constructor(private http: HttpClient) {

  }

  public getOrdersByUserId(userId: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('userId', userId);
    return this.http.get(this.allOrdersUrl, {params: params});
  }

  public createOrder(cart: Cart): Observable<any> {
    return this.http.post(this.allOrdersUrl, cart);
  }

  public updateOrderStatus(order: Order): Observable<any> {
    return this.http.put(`${this.allOrdersUrl}/${order.orderId}`, order);
  }
}
