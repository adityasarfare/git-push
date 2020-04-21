import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id:number;
  employee:Employee;

  constructor(private route: ActivatedRoute, private router: Router, private employeeService:EmployeeService) { 
   console.log("EmployeeDetailsComponent constructor()");
  }

  ngOnInit(): void {
  console.log("EmployeeDetailsComponent ngOnInit()");
   this.employee = new Employee();
   this.id = this.route.snapshot.params['id'];

   this.employeeService.getEmployeeById(this.id).subscribe(data => {
     console.log(data);
     this.employee = data;
   }, error=> console.log(error));
  }
  
  employeeList(){
    this.router.navigate(['employees']);
  }

}
