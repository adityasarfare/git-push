import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../ccourse.service';
import { Course } from '../course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course: Course;
  id: number;

  constructor(private route: ActivatedRoute,private router: Router,
    private courseService: CourseService) { }

  ngOnInit() 
  {
    this.course = new Course();
    this.id = this.route.snapshot.params['id'];
    this.courseService.getCourse(this.id)
      .subscribe(data => {
        console.log(data)
        this.course = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['courses']);
  }
}
