:one: index.html
```html
<app-root></app-root>
```  
:two: main.ts 
```ts
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

:three: app.module.ts 
```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
:four:   
```html
<nav class="navbar navbar-expand-sm navbar  navbar-dark" style="background-color: black;">
    <!-- Links -->
    <ul class="navbar-nav ">
        <li class="nav-item">
            <a routerLink="employees" class="nav-link" routerLinkActive="active">Employee List</a>
        </li>
        <li class="nav-item">
            <a routerLink="add" class="nav-link" routerLinkActive="active">Add Employee</a>
        </li>
    </ul>
</nav>


<div class="container">
    <br>
    <h2 style="text-align: center; color:cornflowerblue">{{title}}</h2>
    <hr>
    <div class="card">
        <div class="card-body">
            <router-outlet></router-outlet>
        </div>
    </div>
</div>

<footer class="footer">
    <div class="container">
        <br> Built with ANGULAR 8 & SPRING BOOT 2
        <br> ECube Solutions (Energy! Endurance! Enthusiasm!)
    </div>
</footer>
```  
:five: app-routing.module.ts
```ts
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  // { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```