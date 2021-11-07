import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public getImageUrl(): string {
    return `/assets/products/${this.product?.petType}/${this.product?.category}/${this.product?.id}.png`;
  }

}
