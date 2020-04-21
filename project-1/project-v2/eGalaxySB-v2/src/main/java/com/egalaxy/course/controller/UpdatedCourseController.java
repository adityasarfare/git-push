package com.egalaxy.course.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egalaxy.course.entity.Course;
import com.egalaxy.course.service.CourseService;
import com.egalaxy.exception.ResourceNotFoundException;

@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:4201"})
@RestController
@RequestMapping(value = "/api")
public class UpdatedCourseController 
{
	@Autowired
	CourseService courseService;

	@GetMapping("/courses")
	public List<Course> getCourses()
	{
		return this.courseService.getCourses();
	}
	
	@PostMapping("/courses")
	public Course createCourse(@Valid @RequestBody Course course) 
	{
		return this.courseService.createCourse(course);
	}
	
	@GetMapping("/courses/{id}")
	public ResponseEntity<Course> getCourseById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException 
	{
		Course course  = this.courseService.getCourseById(id)
		.orElseThrow(() -> new ResourceNotFoundException("Course not found for this id :: " + id));
		return ResponseEntity.ok().body(course);
	}
	
	@PutMapping("/courses/{id}")
	public ResponseEntity<Course> updateCourse(@PathVariable(value= "id") Long id,
			@Valid @RequestBody Course courseDetails) throws ResourceNotFoundException 
	{
		Course course  = this.courseService.getCourseById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Course not found for this id :: " + id));
		course.setCourseName(courseDetails.getCourseName());
		course.setCourseAuthor(courseDetails.getCourseAuthor());
		course.setCourseDiscription(courseDetails.getCourseDiscription());
		course.setCoursePrice(courseDetails.getCoursePrice());
		final Course updatedCourse = courseService.updateCourse(course);
		return ResponseEntity.ok().body(updatedCourse);
	}
	
	@DeleteMapping("courses/{id}")
	public Map<String , Boolean> deleteCourse(@PathVariable(value= "id") Long id) throws ResourceNotFoundException
	{
		Course course  = this.courseService.getCourseById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Course not found for this id :: " + id));
		
		this.courseService.delete(course);
		Map<String , Boolean> res = new HashMap<>();
		res.put("deleted", Boolean.TRUE);
		return res;
		
	}
}
