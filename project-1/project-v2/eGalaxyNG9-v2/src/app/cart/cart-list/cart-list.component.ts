import { Component, OnInit } from '@angular/core';
import { CartService } from './../cart.service';
import { Cart } from '../cart';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../order.serice';
import { Order } from '../order';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  id: number;
  carts: Observable<Cart[]>;
  cart: Cart = new Cart();
  order: Order = new Order();

  constructor(private route: ActivatedRoute, private cartService: CartService, private orderService: OrderService, private router: Router) {

  }

  ngOnInit(): void {
    this.reloadData();

    this.id = this.route.snapshot.params['id'];
    this.cartService.getCart(this.id)
      .subscribe(data => {
        console.log(data)
        this.cart = data;
        this.order.courseId = this.cart.courseId;
        this.order.courseName = this.cart.courseName;
        this.order.courseDescription = this.cart.courseDescription;
        this.save();
      }, error => console.log(error));



  }

  reloadData() {
    this.carts = this.cartService.getCartsList();
  }

  deleteCart(id: number) {
    this.cartService.deleteCart(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  save() {
    this.orderService.createCart(this.order)
      .subscribe(data => console.log(data), error => console.log(error));
    this.cart = new Cart();
    this.order = new Order();
    this.deleteCart(this.id);
    this.gotoList();
  }


  gotoList() {
    this.router.navigate(['eGalaxy/carts']);
  }

  cartDetails(id: number) {
    this.router.navigate(["eGalaxy/carts", id]);
  }
}
