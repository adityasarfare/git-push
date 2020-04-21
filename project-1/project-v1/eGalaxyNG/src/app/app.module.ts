import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CourseDetailsComponent } from "./course-details/course-details.component";
import { CourseListComponent } from "./course-list/course-list.component";
import { CreateCourseComponent } from "./create-course/create-course.component";
import { UpdateCourseComponent } from "./update-course/update-course.component";
@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CreateCourseComponent,
    UpdateCourseComponent,
    CourseDetailsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
