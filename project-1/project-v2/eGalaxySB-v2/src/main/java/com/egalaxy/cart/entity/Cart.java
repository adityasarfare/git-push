package com.egalaxy.cart.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "CARTS")
public class Cart {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "CART_ID")
	private int cartId;
	@Column(name = "COURSE_ID")
	private long courseId;
	@Column(name = "COURSE_NAME")
	private String courseName;
	@Column(name = "COURSE_DESCRIPTION")
	private String courseDescription;
	
	Cart() {
		
	}

	public long getCourseId() {
		return courseId;
	}

	public void setCourseId(long courseId) {
		this.courseId = courseId;
	}

	public int getCartId() {
		return cartId;
	}

	public void setCartId(int cartId) {
		this.cartId = cartId;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getCourseDescription() {
		return courseDescription;
	}

	public void setCourseDescription(String courseDescription) {
		this.courseDescription = courseDescription;
	}

	@Override
	public String toString() {
		return "Cart [cartId=" + cartId + ", courseId=" + courseId + ", courseName=" + courseName
				+ ", courseDescription=" + courseDescription + "]";
	}
	

}
