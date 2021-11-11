import {Component, Input, OnInit} from '@angular/core';
import {CartComponent} from "../../cart/cart.component";
import {getImageUrl} from "../../../utils/utils";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any;

  showDetails: boolean = false;

  constructor(private cartComponent: CartComponent) {
  }

  ngOnInit(): void {
  }

  public getImageUrl(): string {
    return getImageUrl(this.product);
  }

  public addToCart() {
    this.cartComponent.addCartItem(this.product);
  }

  public openDetailsModal() {
    this.showDetails = true;
  }

  public handleOk(): void {
    this.showDetails = false;
  }

  public handleCancel(): void {
    this.showDetails = false;
  }

}
