import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Course } from "../Course";
import { CourseService } from "../course.service";

@Component({
  selector: "app-course-details",
  templateUrl: "./course-details.component.html",
  styleUrls: ["./course-details.component.css"],
})
export class CourseDetailsComponent implements OnInit {
  id: number;
  course: Course;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {
    console.log("CourseDetailsComponent constructor()");
  }

  ngOnInit(): void {
    console.log("CourseDetailsComponent ngOnInit()");
    this.course = new Course();
    this.id = this.route.snapshot.params["id"];

    this.courseService.getCourseById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.course = data;
      },
      (error) => console.log(error)
    );
  }

  CourseList() {
    this.router.navigate(["courses"]);
  }
}
