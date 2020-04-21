package com.egalaxy.course.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egalaxy.course.entity.Course;
import com.egalaxy.course.repository.CourseRepository;

@Service
public class CourseServiceImpl implements CourseService
{
	
	@Autowired
	CourseRepository courseRepository;
	
	@Override
	@Transactional
	public List<Course> getCourses() 
	{
		return courseRepository.findAll();
	}

	@Override
	@Transactional
	public Optional<Course> getCourseById(long id) 
	{
		return  courseRepository.findById(id);
	}

	@Override
	@Transactional
	public Course createCourse(Course course) 
	{
		return  courseRepository.save(course);	
	}

	@Override
	@Transactional
	public Course updateCourse(Course course) 
	{
		return  courseRepository.save(course);
	}

	@Override
	@Transactional
	public void delete(Course course) 
	{
		courseRepository.delete(course);
	}

	@Override
	@Transactional
	public void delete() 
	{
		courseRepository.deleteAll();
	}
	
}