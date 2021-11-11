import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ProductsService {

  private allProductsUrl: string = '/api/products';
  private productsNumberUrl: string = this.allProductsUrl + '/total';

  constructor(private http: HttpClient) {

  }

  public getAllProducts(category: string, petType: string,
                        page: number, size: number,
                        sortBy: string, sortDir: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('category', category);
    params = params.append('petType', petType);
    params = params.append('page', page);
    params = params.append('size', size);
    params = params.append('sortBy', sortBy);
    params = params.append('sortDir', sortDir);
    return this.http.get(this.allProductsUrl, {params: params});
  }

  public getNumberOfProductsTotal(category: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('category', category);
    return this.http.get(this.productsNumberUrl, {params: params});
  }
}
