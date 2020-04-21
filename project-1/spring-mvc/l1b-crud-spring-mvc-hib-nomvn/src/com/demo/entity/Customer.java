package com.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "customer")
public class Customer {
//CREATE THE PROPERTIES
	@Id
	//CREATE THE SEQUENCE GENERATOR
	@SequenceGenerator(name = "customerIdSeq", sequenceName = "customer_id_seq")
	//ASSOCIATE A SEQUENCE GENERATOR TO GENERATE A VALUE USING A HIBERNATE GENERATION STRATEGY
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "customerIdSeq")
	@Column(name="ID")
	private int id;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	@Column(name="FIRST_NAME")
	private String firstName;
	@Column(name="LAST_NAME")
	private String lastName;
	@Column(name="EMAIL")
	private String email;

	public Customer() {
	}
	public String getEmail() {
		return email;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	@Override
	public String toString() {
		return super.toString();
	}
}
