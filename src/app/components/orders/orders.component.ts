import { Component, OnInit } from '@angular/core';
import {Order} from "../../models/order.model";
import {OrdersService} from "../../services/orders.service";
import {AuthenticationService} from "../../services/authentication.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.less']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];

  constructor(private ordersService: OrdersService,
              private authService: AuthenticationService,
              private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.ordersService.getOrdersByUserId(this.authService.getLoggedInUserId()).subscribe((res) => {
      this.orders = res;
    })
  }

  public getCreatedDate(order: Order) {
    return this.datePipe.transform(order ? order.created : new Date(),"dd.MM.yyyy HH:mm");
  }

  public setCompleted(order: Order) {
    order.status = 'COMPLETED';
    this.ordersService.updateOrderStatus(order).subscribe((res: Order) => {
      if (res) {
        order = res;
      }
    })
  }

}
