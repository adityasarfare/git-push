package com.egalaxy.course.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.egalaxy.course.entity.Course;

public interface CourseService {

	List<Course> getAllCourses();
	
	Optional<Course> getCourseById(long id);
	
	Course createCourse(Course course);
	
	Course updateCourse(Course course);
	
	void deleteCourseById(Long id);
	
	/* void deleteallCourses(); */
	
}
