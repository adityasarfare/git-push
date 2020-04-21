import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Course } from "../Course";
@Component({
  selector: "app-create-Course",
  templateUrl: "./create-Course.component.html",
  styleUrls: ["./create-Course.component.css"],
})
export class CreateCourseComponent {
  Course: Course = new Course();
  constructor(private http: HttpClient, private router: Router) {}
  onSubmit() {
    //DATA IS POSTED TO THE REST API BACKEND
    this.http
      .post("http://localhost:9999/pt/api/Courses", this.Course)
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
    //NAVIGATING TO THE CourseS LIST PAGE
    this.router.navigate(["/Courses"]);
  }
}
