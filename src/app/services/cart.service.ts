import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Cart} from "../models/cart.model";
import {Observable} from "rxjs";

@Injectable()
export class CartService {

  private cartUrl: string = '/api/cart';

  constructor(private http: HttpClient) {

  }

  public getCartByUserId(userId: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('userId', userId);
    return this.http.get(this.cartUrl, {params: params});
  }

  public saveCart(cart: Cart): Observable<any> {
    return this.http.post(this.cartUrl, cart);
  }
}
