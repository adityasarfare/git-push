import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{

  id:number;
  employee:Employee;

  constructor(private route: ActivatedRoute, private router: Router, private employeeService:EmployeeService) { 
   console.log("UpdateEmployeeComponent constructor()");
  }

  ngOnInit(): void {
  console.log("UpdateEmployeeComponent ngOnInit()");
   this.employee = new Employee();
   this.id = this.route.snapshot.params['id'];

   this.employeeService.getEmployeeById(this.id).subscribe(data => {
     console.log(data);
     this.employee = data;
   }, error=> console.log(error));
  }
  
  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee)
    .subscribe(data => console.log(data), error => console.log(error));
    //clear the employee
    this.employee = new Employee();
    //navigate to the employee list 
    this.router.navigate(['/employees']);
  }

}
