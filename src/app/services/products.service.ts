import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BASE_URL} from "../environment";
import {Observable} from "rxjs";

@Injectable()
export class ProductsService {

  private allProductsUrl: string = BASE_URL + 'products';

  constructor(private http: HttpClient) {

  }

  public getAllProducts(category: string, petType: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('category', category);
    params = params.append('petType', petType);
    return this.http.get(this.allProductsUrl, {params: params});
  }
}
