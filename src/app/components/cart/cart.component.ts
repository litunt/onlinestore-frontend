import {Component, HostListener, OnInit} from '@angular/core';
import {Item} from "../../models/item.model";
import {CartService} from "../../services/cart.service";
import {Product} from "../../models/product.model";
import {Cart} from "../../models/cart.model";
import {AuthenticationService} from "../../services/authentication.service";
import {DatePipe} from "@angular/common";
import {OrdersService} from "../../services/orders.service";
import {Router} from "@angular/router";
import {getImageUrl} from "../../utils/utils";
import {ErrorHandlerComponent} from "../error-handler/error-handler.component";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  private cart!: Cart;
  private NUM_OF_CART_ITEMS: string = 'numberOfCartItems';
  private CART_ITEMS_LIST: string = 'cartItems';

  cartItems: Item[] = [];
  showDetails: boolean = false;

  constructor(private cartService: CartService,
              private authService: AuthenticationService,
              private ordersService: OrdersService,
              private datePipe: DatePipe,
              private router: Router,
              private errorHandler: ErrorHandlerComponent) {
  }

  ngOnInit(): void {
    if (this.authService.isUserLoggedIn()) {
      this.cartService.getCartByUserId(this.authService.getLoggedInUserId()).subscribe((res: Cart) => {
          if (res) {
            this.cart = res;
            this.cartItems = this.cart.cartItems;
          } else {
            if (localStorage.getItem(this.CART_ITEMS_LIST)) {
              this.cartItems = JSON.parse(<string>localStorage.getItem(this.CART_ITEMS_LIST));
            }
          }
          this.setTotalNumberOfExistingItems();
        },
        errorResponse => {
          this.errorHandler.handleError(errorResponse.error.message);
        });
    } else if (localStorage.getItem(this.CART_ITEMS_LIST)) {
      this.cartItems = JSON.parse(<string>localStorage.getItem(this.CART_ITEMS_LIST));
    }
  }

  public getCreatedDate() {
    return this.datePipe.transform(this.cart ? this.cart.created : new Date(), "dd.MM.yyyy HH:mm");
  }

  public getTotalSum() {
    return this.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  public orderButtonDisabled() {
    return !this.authService.isUserLoggedIn();
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

  public getImageUrl(product: Product): string {
    return getImageUrl(product);
  }

  public increaseItemQuantity(newQuantity: number, item: Item) {
    localStorage.setItem(this.NUM_OF_CART_ITEMS, newQuantity.toString());

    if (this.authService.isUserLoggedIn()) {
      this.saveCart();
    } else {
      this.cartItems = JSON.parse(<string>localStorage.getItem(this.CART_ITEMS_LIST));
      let existingItem = this.cartItems.find(i => i.product.name === item.product.name);
      if (existingItem) {
        existingItem.quantity = newQuantity;
      }
      localStorage.setItem(this.CART_ITEMS_LIST, JSON.stringify(this.cartItems));
    }

  }

  public addCartItem(product: Product) {
    this.increaseItemsTotalAmount();

    let item: Item = {
      itemId: null,
      containerId: null,
      product,
      quantity: 1
    }

    if (this.authService.isUserLoggedIn()) {
      this.addItemForLoggedUser(item);
    } else if (localStorage.getItem(this.CART_ITEMS_LIST)) {
      this.addItemToExistingStorage(item);
    } else {
      this.cartItems.push(item);
      localStorage.setItem(this.CART_ITEMS_LIST, JSON.stringify(this.cartItems));
    }
  }

  public doOrder() {
    if (!this.cart) {
      this.cart = {
        cartId: null,
        userId: this.authService.getLoggedInUserId(),
        cartItems: this.cartItems,
        created: new Date()
      }
    }

    this.ordersService.createOrder(this.cart).subscribe((res) => {
        if (res) {
          localStorage.clear();
          this.router.navigate(['/orders']);
        }
      },
      errorResponse => {
        this.errorHandler.handleError(errorResponse.error.message);
      });
  }

  private saveCart() {
    this.cartService.saveCart(this.cart).subscribe((res) => {
        if (res) {
          this.cart = res;
          this.cartItems = this.cart.cartItems;
        } else {
          this.cartItems = [];
        }
      },
      errorResponse => {
        this.errorHandler.handleError(errorResponse.error.message);
      });
  }

  private addItemForLoggedUser(item: Item) {
    if (this.cart) {
      this.addItemToExistingUserCart(item);
    } else {
      this.createCartForLoggedUserWithItems([item]);
    }
    this.saveCart();
  }

  private addItemToExistingUserCart(item: Item) {
    let existingItem = this.cart.cartItems.find(i => i.product.name === item.product.name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      item.containerId = this.cart.cartId;
      this.cart.cartItems.push(item);
    }
  }

  private createCartForLoggedUserWithItems(items: Item[]) {
    this.cart = {
      cartId: null,
      userId: this.authService.getLoggedInUserId(),
      cartItems: items,
      created: new Date()
    }
    if (this.cartItems.length === 0) {
      if (localStorage.getItem(this.CART_ITEMS_LIST)) {
        let items = JSON.parse(localStorage.getItem(this.CART_ITEMS_LIST)!);
        this.cart.cartItems.push(...items);
      }
    } else {
      this.cart.cartItems.push(...this.cartItems);
    }
  }

  private increaseItemsTotalAmount() {
    if (localStorage.getItem(this.NUM_OF_CART_ITEMS)) {
      let num = parseInt(localStorage.getItem(this.NUM_OF_CART_ITEMS)!);
      num += 1;
      localStorage.setItem(this.NUM_OF_CART_ITEMS, num.toString());
    } else {
      localStorage.setItem(this.NUM_OF_CART_ITEMS, '1');
    }
  }

  private addItemToExistingStorage(item: Item) {
    this.cartItems = JSON.parse(<string>localStorage.getItem(this.CART_ITEMS_LIST));
    let existingItem = this.cartItems.find(i => i.product.name === item.product.name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push(item);
    }
    localStorage.setItem(this.CART_ITEMS_LIST, JSON.stringify(this.cartItems));
  }

  private setTotalNumberOfExistingItems() {
    let totalNumberOfItems = 0;
    for (const item of this.cartItems) {
      totalNumberOfItems += item.quantity;
    }
    localStorage.setItem(this.NUM_OF_CART_ITEMS, totalNumberOfItems.toString());
  }
}
