package com.egalaxy.course.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "COURSES")
public class Course {
	@Id
	@Column(name = "COURSE_ID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	public Course(String courseName, String courseAuthor, String courseDiscription, long coursePrice) {
		super();
		this.courseName = courseName;
		this.courseAuthor = courseAuthor;
		this.courseDiscription = courseDiscription;
		this.coursePrice = coursePrice;
	}

	@Column(name = "COURSE_NAME" , nullable = false )
	private String courseName;
	
	@Column(name = "COURSE_AUTHOR" , nullable = false )
	private String courseAuthor;
	
	@Column(name = "COURSE_DISCRIPTION" , nullable = false )
	private String courseDiscription;
	
	@Column(name = "COURSE_PRICE" , nullable = false )
	private long coursePrice;
	
	
	public Course()
	{
		
	}

	public long getId() {
		return id;
	}

	
	public void setId(long id) {
		this.id = id;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getCourseAuthor() {
		return courseAuthor;
	}

	public void setCourseAuthor(String courseAuthor) {
		this.courseAuthor = courseAuthor;
	}

	public String getCourseDiscription() {
		return courseDiscription;
	}

	public void setCourseDiscription(String courseDiscription) {
		this.courseDiscription = courseDiscription;
	}

	public long getCoursePrice() {
		return coursePrice;
	}

	public void setCoursePrice(long coursePrice) {
		this.coursePrice = coursePrice;
	}
	
	@Override
	public String toString() {
		return "Course [id=" + id + ", courseName=" + courseName + ", courseAuthor=" + courseAuthor
				+ ", courseDiscription=" + courseDiscription + ", coursePrice=" + coursePrice + "]";
	}
}
