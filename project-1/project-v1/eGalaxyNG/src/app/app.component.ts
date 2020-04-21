import { Component } from "@angular/core";
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
  //moving to Course-list Component
  // Courses: Observable<any>;
  // //constructor with http Property
  // constructor(private http: HttpClient) {
  //  this.Courses =  this.http.get("http://localhost:9999/pt/api/Courses");
  // }
}
