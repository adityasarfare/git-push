import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CourseService {
  private baseUrl = "http://localhost:9999/eGalaxy/api/courses";
  //USING THE HttpClient MODULE
  constructor(private http: HttpClient) {}
  getAllCourses(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getCourseById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCourse(course: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, course);
  }

  updateCourse(id: number, course: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, course);
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: "text" });
  }
}
