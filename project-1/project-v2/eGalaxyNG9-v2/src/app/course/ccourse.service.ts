import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class CourseService
{
    private url = 'http://localhost:9999/eGalaxy/api/courses';

    constructor(private http : HttpClient)
    {

    }

    getCourse(id : number): Observable<any>
    {
        return this.http.get(`${this.url}/${id}`);
    }

    createCourse(course : Object): Observable<Object>
    {
        return this.http.post(`${this.url}`, course);
    }

    updateCourse(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.url}/${id}`, value);
      }

    deleteCourse(id: number): Observable<any> 
    {
        return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
    }  

    getCoursesList(): Observable<any>
    {
        return this.http.get(`${this.url}`);
    }
}