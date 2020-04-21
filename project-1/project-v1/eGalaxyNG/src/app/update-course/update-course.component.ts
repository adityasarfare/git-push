import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Course } from "../Course";
import { CourseService } from "../course.service";

@Component({
  selector: "app-update-course",
  templateUrl: "./update-course.component.html",
  styleUrls: ["./update-course.component.css"],
})
export class UpdateCourseComponent implements OnInit {
  id: number;
  Course: Course;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private CourseService: CourseService
  ) {
    console.log("UpdateCourseComponent constructor()");
  }

  ngOnInit(): void {
    console.log("UpdateCourseComponent ngOnInit()");
    this.Course = new Course();
    this.id = this.route.snapshot.params["id"];

    this.CourseService.getCourseById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.Course = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.CourseService.updateCourse(this.id, this.Course).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    //clear the Course
    this.Course = new Course();
    //navigate to the Course list
    this.router.navigate(["/Courses"]);
  }
}
