import { Employee } from "../employee";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"],
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee();
  constructor(private http: HttpClient, private router :Router) {}
  onSubmit(){
  //DATA IS POSTED TO THE REST API BACKEND
  this.http.post("http://localhost:9999/pt/api/employees", this.employee).subscribe(data => console.log(data), error => console.log(error));
  //NAVIGATING TO THE EMPLOYEES LIST PAGE
  this.router.navigate(['/employees']);
  }
}
