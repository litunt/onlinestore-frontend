import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute} from "@angular/router";
import {PET_TYPES} from "../../utils/utils";
import {ErrorHandlerComponent} from "../error-handler/error-handler.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  category: string = "";
  private petType: string = "";
  private baseSpan: number = 24;

  petTypes: string [] = PET_TYPES;

  products: Product[] = [];
  numOfProductsInRow: number = 4;
  productRows: number[] = [];
  colSpan: number = this.baseSpan;
  numberOfProductsList: number[] = [4, 16, 24, 32]
  size: number = 4;
  page: number = 1;
  productsTotal: number = 0;
  isAll: boolean = true;

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute,
              private errorHandler: ErrorHandlerComponent) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['petType']) {
        if (params['petType'] === 'all') {
          this.isAll = true;
          this.petType = '';
        } else {
          this.isAll = false;
          this.petType = params['petType'].toUpperCase();
        }
      }
      if (params['category']) {
        this.category = params['category'].toUpperCase();
      }
      this.getProducts();
      this.getProductsTotal();
    });
  }

  public getClassName(currentPetType: string) {
    if (currentPetType === this.petType || (currentPetType === 'ALL' && this.isAll)) {
      return 'selected-pet-type';
    }
    return '';
  }

  public pageChange($pageNum: number) {
    this.page = $pageNum;
    this.getProducts();
  }

  public getProducts(): void {
    this.productsService.getAllProducts(this.category, this.petType, this.page - 1, this.size).subscribe(
      (response: Product[]) => {
        this.productRows = [];
        this.products = response;
        let numOfRows = this.products.length / this.numOfProductsInRow;
        this.colSpan = this.baseSpan / this.numOfProductsInRow;
        for (let i = 0; i < numOfRows; i++) {
          this.productRows.push(i);
        }
      },
      (errorResponse) => {
        this.errorHandler.handleError(errorResponse.error.message);
      }
    );
  }

  private getProductsTotal() {
    this.productsService.getNumberOfProductsTotal(this.category).subscribe((res: number) => {
      this.productsTotal = res;
    })
  }
}
