import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule } from '@angular/material';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CreateCourseComponent } from './course/create-course/create-course.component';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { UpdateCourseComponent } from './course/update-course/update-course.component';


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserListComponent,
    UpdateUserComponent,

    CreateCourseComponent,
    CourseListComponent,
    CourseDetailsComponent,
    UpdateCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    // NgbModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
