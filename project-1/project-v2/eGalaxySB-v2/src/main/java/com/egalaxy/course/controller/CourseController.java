/*
 * package com.eGalaxy.course.controller;
 * 
 * import java.util.List; import java.util.Optional;
 * 
 * import org.springframework.beans.factory.annotation.Autowired; import
 * org.springframework.http.MediaType; import
 * org.springframework.web.bind.annotation.PathVariable; import
 * org.springframework.web.bind.annotation.RequestBody; import
 * org.springframework.web.bind.annotation.RequestMapping; import
 * org.springframework.web.bind.annotation.RequestMethod; import
 * org.springframework.web.bind.annotation.RestController;
 * 
 * import com.eGalaxy.course.entity.Course;
 * 
 * @RestController
 * 
 * @RequestMapping(value = "/api") public class CourseController {
 * 
 * @Autowired CourseService courseService;
 * 
 * @RequestMapping(value = "/courses", method = RequestMethod.GET) public
 * List<Course> getCourses() { return this.courseService.getCourses(); }
 * 
 * @RequestMapping(value = "/courses", method = RequestMethod.POST, consumes =
 * MediaType.APPLICATION_JSON_VALUE, produces =
 * MediaType.APPLICATION_JSON_VALUE) public Course createCourse(@RequestBody
 * Course course) { return this.courseService.createCourse(course); }
 * 
 * @RequestMapping(value = "courses/{id}", method = RequestMethod.GET) public
 * Optional<Course> getCourseById(@PathVariable long id) { return
 * this.courseService.getCourseById(id); }
 * 
 * @RequestMapping(value = "courses/{id}", method = RequestMethod.PUT, consumes
 * = MediaType.APPLICATION_JSON_VALUE, produces =
 * MediaType.APPLICATION_JSON_VALUE) public Course updateCourse(@RequestBody
 * Course course) { return this.updateCourse(course); }
 * 
 * 
 * @RequestMapping(value = "courses/{id}", method = RequestMethod.DELETE) public
 * void deleteCoursebyId(@PathVariable long id) {
 * this.courseService.deleteById(id); }
 * 
 * 
 * @RequestMapping(value = "courses/delete", method = RequestMethod.DELETE)
 * public void deleteallCourses() { this.courseService.delete();
 * 
 * } }
 */