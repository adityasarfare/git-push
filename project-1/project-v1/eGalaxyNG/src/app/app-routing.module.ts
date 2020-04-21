//IMPORT THE REQUIRED OBJECTS
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CreateCourseComponent } from './create-course/create-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';


//CONFIGURING THE ROUTES
const routes: Routes = [
  { path: "", redirectTo: "courses", pathMatch: "full" },
  { path: "courses", component: CourseListComponent },
  { path: "courses/add", component: CreateCourseComponent },
  { path: "courses/update/:id", component: UpdateCourseComponent },
  { path: "courses/details/:id", component: CourseDetailsComponent },
];

//CREATE THE APPROUTINGMODULE CLASS
//USE THE @NGMODULE DECORATOR
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
