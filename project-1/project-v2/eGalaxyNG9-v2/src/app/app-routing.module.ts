import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CreateCourseComponent } from './course/create-course/create-course.component';
import { UpdateCourseComponent } from './course/update-course/update-course.component';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { OrderListComponent } from './cart/order-list/order-list.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-guard.service';

const routes: Routes = [
  // { path: '', redirectTo: 'eGalaxy/users/register', pathMatch: 'full' },
  { path : '', redirectTo : 'logout',  pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },


  { path: 'eGalaxy/users/register', component: AddUserComponent,canActivate:[AuthGaurdService] },
  { path: 'eGalaxy/users/list', component: UserListComponent,canActivate:[AuthGaurdService] },
  { path: 'eGalaxy/users/update/:id', component: UpdateUserComponent,canActivate:[AuthGaurdService] },

  { path: "eGalaxy/courses", component: CourseListComponent,canActivate:[AuthGaurdService] },
  { path: "eGalaxy/courses/add", component: CreateCourseComponent,canActivate:[AuthGaurdService] },
  { path: "eGalaxy/courses/update/:id", component: UpdateCourseComponent,canActivate:[AuthGaurdService] },
  { path: "eGalaxy/courses/details/:id", component: CourseDetailsComponent,canActivate:[AuthGaurdService] },

  { path: "eGalaxy/carts", component: CartListComponent,canActivate:[AuthGaurdService] },
  { path: "eGalaxy/carts/:id", component: CartListComponent,canActivate:[AuthGaurdService] },
  { path: "eGalaxy/orders", component: OrderListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
