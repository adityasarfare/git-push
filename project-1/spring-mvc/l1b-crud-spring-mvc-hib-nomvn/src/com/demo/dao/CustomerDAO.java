package com.demo.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.demo.entity.Customer;

@Repository
public interface CustomerDAO {
	// Get the customers
	public List<Customer> getCustomers();
	
	public void saveCustomer(Customer theCustomer);

	public Customer getCustomer(int theId);

	public void deleteCustomer(int theId);
	 
}
