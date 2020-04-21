import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "./employee";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "eGalaxy!";
  //HARD CODED DATA
  // products = [
  //   {
  //     productId: 1,
  //     productName: "Man's search for meaning",
  //     description: "Viktor Frankl",
  //     price: 100.5,
  //   },
  //   {
  //     productId: 2,
  //     productName: "Awaken the Giant Within",
  //     description: "Anthony Robbin",
  //     price: 200.0,
  //   },
  // ];
  //moving to employee-list Component
  // employees: Observable<any>;
  // //constructor with http Property
  // constructor(private http: HttpClient) {
  //  this.employees =  this.http.get("http://localhost:9999/pt/api/employees");
  // }
}
