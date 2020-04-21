import { CourseService } from '../course.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../course';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
//import {MatSort, MatSortable, MatTableDataSource} from '@angular/material';



@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit 
{
  @ViewChild(MatSort , {static: false}) sort : MatSort;
  columnsName = ['courseName', 'courseAuthor', 'courseDiscription', 'coursePrice', 'Action'];
  dataSource;
  courses: Observable<Course[]>;

  constructor(private courseService: CourseService,
    private router: Router) 
    {

    }

  ngOnInit(): void 
  {
    this.reloadData();
  }

  reloadData() {
    //this.courses = this.courseService.getCoursesList();
     this.courseService.getCoursesList()
       .subscribe(result =>
         {
          console.log(result),
          this.dataSource = new MatTableDataSource(result);
          this.dataSource.sort = this.sort;
         });

           
  }

  deleteCourse(id: number)
  {
    this.courseService.deleteCourse(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  courseDetails(id: number)
  {
    console.log("id: " + id);
    this.router.navigate(['/eGalaxy/details',id]);
  }

  updateCourse(id: number){
    this.router.navigate(['/eGalaxy/update', id]);
  }
}
