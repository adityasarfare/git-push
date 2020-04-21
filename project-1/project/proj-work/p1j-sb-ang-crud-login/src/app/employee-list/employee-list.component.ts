import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {EmployeeService} from './../employee.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent  {
  
  employees: Observable<any>;
  //constructor with dependencies
  constructor(private http: HttpClient, private employeeService : EmployeeService, private router:Router) {
    //fetching observable from the server
   this.employees =  this.employeeService.getAllEmployees();
  }

  //method to update employee
  updateEmployee(id:number){
    this.router.navigate(['update',id]);
  }
  //METHOD TO DELETE EMPLOYEE
  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id)
    .subscribe(
      data => {
        console.log(data);
      //reloading the data
       this.employees =  this.employeeService.getAllEmployees();
      }
    );
  }
  employeeDetails(id:number){
    this.router.navigate(['details',id]);
  }
}
