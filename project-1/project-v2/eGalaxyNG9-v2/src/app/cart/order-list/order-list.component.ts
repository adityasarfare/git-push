import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.serice';
import { Order } from '../order';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Observable<Order[]>;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.orders = this.orderService.getOrdersList();
  }
}
