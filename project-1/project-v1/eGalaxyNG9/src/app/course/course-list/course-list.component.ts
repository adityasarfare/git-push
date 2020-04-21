import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Course } from "../course";
import { CourseService } from "./../ccourse.service";

@Component({
  selector: "app-course-list",
  templateUrl: "./courses-table.component.html",
  styleUrls: ["./course-list.component.css"],
})
export class CourseListComponent implements OnInit {
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  columnsName = [
    "courseName",
    "courseAuthor",
    "courseDescription",
    "coursePrice",
    "Action",
  ];
  dataSource:any;
  courses: Observable<Course[]>;

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    //this.courses = this.courseService.getCoursesList();
    this.courseService.getCoursesList().subscribe((result) => {
      console.log(result), (this.dataSource = new MatTableDataSource(result));
      this.dataSource.sort = this.sort;
    });
  }

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }

  courseDetails(id: number) {
    this.router.navigate(["details", id]);
  }

  updateCourse(id: number) {
    this.router.navigate(["update", id]);
  }
}
