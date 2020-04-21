package com.egalaxy.course.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.egalaxy.course.entity.Course;
import com.egalaxy.course.service.CourseService;
import com.egalaxy.user.exception.ResourceNotFoundException;

@CrossOrigin(origins = { "http://localhost:4200", "http://localhost:4201" })

@RestController
@RequestMapping(value = "/api")
public class CourseController {

	@Autowired
	CourseService courseService;

	@RequestMapping(value = "/courses", method = RequestMethod.GET)
	public List<Course> getAllCourses() {
		return this.courseService.getAllCourses();
	}

	@RequestMapping(value = "/courses/{id}", method = RequestMethod.GET)
	 public ResponseEntity<Course> getCourseById(@PathVariable(value="id") long courseId)
		      throws ResourceNotFoundException {
		    Course course = courseService.getCourseById(courseId).orElseThrow(() -> new ResourceNotFoundException("Course not found for this id :: " + courseId));
		    return ResponseEntity.ok().body(course);
		}
	
//	public Optional<Course> getCourseById(@PathVariable long id) {
//		return courseService.getCourseById(id);
//	}

	@RequestMapping(value = "/courses", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public Course createCourse(@RequestBody Course course) {
		return this.courseService.createCourse(course);
	}


	@RequestMapping(value = "/courses/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Course> updateCourse(@PathVariable(value = "id") long courseId, @RequestBody Course course)   throws ResourceNotFoundException{
		Course course2 = courseService.getCourseById(courseId) .orElseThrow(() -> new ResourceNotFoundException("Course not found for this id :: " + courseId));
		course2.setCourseId(course.getCourseId());
		course2.setCourseName(course.getCourseName());
		course2.setCourseDescription(course.getCourseDescription());
		course2.setCourseAuthor(course.getCourseAuthor());
		course2.setCoursePrice(course.getCoursePrice());
		final Course updatedCourse = courseService.updateCourse(course2);
		return ResponseEntity.ok(updatedCourse);
	}

//	@RequestMapping(value = "/courses/{id}", method = RequestMethod.DELETE)
//	public void deleteCourseById(@PathVariable long id) {
//		this.courseService.deleteCourseById(id);
//	}

	@RequestMapping(value = "/courses/{id}", method = RequestMethod.DELETE)
	  public Map<String, Boolean> deleteUser(@PathVariable(value = "id") long courseId)
	      throws ResourceNotFoundException {
	    Course course = courseService.getCourseById(courseId)
	        .orElseThrow(() -> new ResourceNotFoundException("Course not found for this id :: " + courseId));
	
	    courseService.deleteCourseById(courseId);
	    Map<String, Boolean> response = new HashMap<>();
	    response.put("deleted", Boolean.TRUE);
	    return response;
	  }

// TODO : IMPLEMENT THIS METHOD
//	@DeleteMapping(value= "/courses")
//	public void deleteCourses() {
//		courseService.deleteAllCourses();
//	}

}
