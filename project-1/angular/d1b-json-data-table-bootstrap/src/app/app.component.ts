import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eGalaxy';

  //create a product array to hold javascript objects
  product = {
    productId: 1,
    productName: "Man's search for meaning",
    description: "Viktor Frankl",
    price: 100.5,
  };

  products = [
    {
      productId: 1,
      productName: "Man's search for meaning",
      description: "Viktor Frankl",
      price: 100.5,
    },
    {
      productId: 2,
      productName: "Awaken the Giant Within",
      description: "Anthony Robbins",
      price: 200.0,
    },
  ];
}
