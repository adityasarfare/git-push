import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../ccourse.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  course: Course;
  id: number;
  submitted = false;
  
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

    updateCourse()
    {
      this.courseService.updateCourse(this.id, this.course)
      .subscribe(data => console.log(data), error => console.log(error))
      this.course = new Course();
      this.gotoList();
    }

    onSubmit() {
      this.updateCourse();    
    }

    gotoList()
    {
      this.router.navigate(['/courses']);
    }

}
