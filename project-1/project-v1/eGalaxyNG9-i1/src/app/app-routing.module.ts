import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';

const routes: Routes = [
  // { path: '', redirectTo: 'eGalaxy/users/register', pathMatch: 'full' },
  { path: 'eGalaxy/users/register', component: AddUserComponent },
  { path: 'eGalaxy/users/list', component: UserListComponent },
  { path: 'eGalaxy/users/update/:id', component: UpdateUserComponent },

  // { path: "eGalaxy/courses", component: CourseListComponent },
  // { path: "eGalaxy/courses/add", component: CreateCourseComponent },
  // { path: "eGalaxy/courses/update/:id", component: UpdateCourseComponent },
  // { path: "eGalaxy/courses/details/:id", component: CourseDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
