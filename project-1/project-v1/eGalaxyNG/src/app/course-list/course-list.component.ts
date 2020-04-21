import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { CourseService } from "../course.service";
@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"],
})
export class CourseListComponent {
  courses: Observable<any>;
  //constructor with dependencies
  constructor(
    private http: HttpClient,
    private courseService: CourseService,
    private router: Router
  ) {
    //fetching observable from the server
    this.courses = this.courseService.getAllCourses();
  }

  //method to update Course
  updateCourse(id: number) {
    this.router.navigate(["update", id]);
  }
  //METHOD TO DELETE Course
  deleteCourse(id: number) {
    this.courseService.deleteCourse(id).subscribe((data) => {
      console.log(data);
      //reloading the data
      this.courses = this.courseService.getAllCourses();
    });
  }
  CourseDetails(id: number) {
    this.router.navigate(["details", id]);
  }
}
