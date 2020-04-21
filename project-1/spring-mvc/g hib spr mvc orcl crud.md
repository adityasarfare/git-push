:beginner: **CRUD OPERATION USING SPRING MVC, HIBERNATE, ORACLE**

:electron: **CONFIGURE THE DATABASE AND PROJECT DEPENDENCIES**

1. _CONFIGURE THE DATABASE_  
   * create table and insert data
     * use scripts.sql

2. _CONFIGURE THE JAR DEPENDENCIES_
   * add
     * ojdbc14.jar
     * spring jars
     * hibernate jars
     * jstl jars

:electron: **CREATE THE DAO**

```java
package com.demo.dao;

import java.util.List;

import com.demo.entity.Customer;

public interface CustomerDAO {

	public List<Customer> getCustomers();

	public void saveCustomer(Customer theCustomer);

	public Customer getCustomer(int theId);

	public void deleteCustomer(int theId);

}

package com.demo.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.demo.entity.Customer;

@Repository
public class CustomerDAOImpl implements CustomerDAO {

	// need to inject the session factory
	@Autowired
	private SessionFactory sessionFactory;

	@Override
//@Transactional
	public List<Customer> getCustomers() {
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();

		// create a query
		Query<Customer> theQuery = currentSession.createQuery("from Customer ORDER BY lastName", Customer.class);

		// execute query and get result list
		List<Customer> customers = theQuery.getResultList();

		// return the results
		return customers;
	}

	@Override
	public void saveCustomer(Customer theCustomer) {

		// get current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();

		// currentSession.save(theCustomer);

		// save/upate the customer
		currentSession.saveOrUpdate(theCustomer);
	}

	@Override
	public Customer getCustomer(int theId) {

		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();

		// now retrieve/read from database using the primary key
		Customer theCustomer = currentSession.get(Customer.class, theId);

		return theCustomer;
	}

	@Override
	public void deleteCustomer(int theId) {

		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();

		// delete object with primary key
		Query theQuery = currentSession.createQuery("delete from Customer where id=:customerId");
		theQuery.setParameter("customerId", theId);

		theQuery.executeUpdate();
	}
}

```

:electron: **CREATE THE SERVICE LAYER**

```java
package com.demo.service;

import java.util.List;

import com.demo.entity.Customer;

public interface CustomerService {

	public List<Customer> getCustomers();

	public void saveCustomer(Customer theCustomer);

	public Customer getCustomer(int theId);

	public void deleteCustomer(int theId);
}

package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.dao.CustomerDAO;
import com.demo.entity.Customer;

@Service
public class CustomerServiceImpl implements CustomerService {
	// need to inject customer dao
	@Autowired
	private CustomerDAO customerDAO;

	@Override
	@Transactional
	public List<Customer> getCustomers() {
		return customerDAO.getCustomers();
	}

	@Override
	@Transactional
	public void saveCustomer(Customer theCustomer) {

		customerDAO.saveCustomer(theCustomer);
	}

	@Override
	@Transactional
	public Customer getCustomer(int theId) {

		return customerDAO.getCustomer(theId);
	}

	@Override
	@Transactional
	public void deleteCustomer(int theId) {

		customerDAO.deleteCustomer(theId);
	}
}

```

:electron: **CREATE THE CONTROLLER**

```java
package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.demo.entity.Customer;
import com.demo.service.CustomerService;

@Controller
@RequestMapping("/customer")
public class CustomerController {
	@Autowired
	private CustomerService customerService;

	@GetMapping("/list")
	public String listCustomers(Model theModel) {
		List<Customer> customerList = customerService.getCustomers();
		theModel.addAttribute("customers", customerList);
		return "list-customer";
	}
}
```

:electron: **CREATE THE ENTITY**

```java
package com.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="customer")
public class Customer {

	@Id
//	@GeneratedValue(strategy=GenerationType.AUTO)
	@SequenceGenerator(name="customer_id_seq_gen", sequenceName="customer_id_seq")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="customer_id_seq_gen")
	@Column(name="id")
	private int id;
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="email")
	private String email;
	
//	public Customer() {
//		
//	}


	public String getEmail() {
		return email;
	}

	public String getFirstName() {
		return firstName;
	}

	public int getId() {
		return id;
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

	public void setId(int id) {
		this.id = id;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	@Override
	public String toString() {
		return "Customer [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + "]";
	}
		
}
```

:electron: **CREATE THE SPRING BEAN CONFIGURATION FILE**
```xml 
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:context="http://www.springframework.org/schema/context"
	xmlns:mvc="http://www.springframework.org/schema/mvc"
	xmlns:tx="http://www.springframework.org/schema/tx"
	xsi:schemaLocation="http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc.xsd
		http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
		http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd
		http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd">


	<!-- Add support for conversion, formatting and validation support -->
	<mvc:annotation-driven />
	
	<!-- Add support for component scanning -->
	<context:component-scan base-package="com.demo" />


	<!-- Step 1: Define Database DataSource / connection pool -->
	<bean id="myDataSource"
		class="com.mchange.v2.c3p0.ComboPooledDataSource"
		destroy-method="close">
		<property name="driverClass"
			value="oracle.jdbc.driver.OracleDriver" />
		<property name="jdbcUrl"
			value="jdbc:oracle:thin:@localhost:1521:xe" />
		<property name="user" value="hr" />
		<property name="password" value="hr" />

		<!-- these are connection pool properties for C3P0 -->
		<property name="initialPoolSize" value="5" />
		<property name="minPoolSize" value="5" />
		<property name="maxPoolSize" value="20" />
		<property name="maxIdleTime" value="30000" />
	</bean>

	<!-- Step 2: Setup Hibernate session factory -->
	<bean id="sessionFactory"
		class="org.springframework.orm.hibernate5.LocalSessionFactoryBean">
		<property name="dataSource" ref="myDataSource" />
		<property name="packagesToScan" value="com.demo.entity" />
		<property name="hibernateProperties">
			<props>
				<prop key="hibernate.dialect">org.hibernate.dialect.Oracle10gDialect</prop>
				<prop key="hibernate.show_sql">true</prop>
			</props>
		</property>
	</bean>

	<!-- Step 3: Setup Hibernate transaction manager -->
	<bean id="myTransactionManager"
		class="org.springframework.orm.hibernate5.HibernateTransactionManager">
		<property name="sessionFactory" ref="sessionFactory" />
	</bean>

	<!-- Step 4: Enable configuration of transactional behavior based on annotations -->
	<tx:annotation-driven
		transaction-manager="myTransactionManager" />


	<!-- Define Spring MVC view resolver -->
	<bean
		class="org.springframework.web.servlet.view.InternalResourceViewResolver">
		<property name="prefix" value="/WEB-INF/view/" />
		<property name="suffix" value=".jsp" />
	</bean>
	
	<!-- Add support for reading web resources: css, images, js, etc ... -->
	<mvc:resources location="/resources/"
		mapping="/resources/**"></mvc:resources>

</beans>

```

:electron: **CONFIGURE WEB.XML FILE**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://xmlns.jcp.org/xml/ns/javaee" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd" id="WebApp_ID" version="4.0">
  <display-name>ed1a-crud-spring-mvc-hib-nomvn</display-name>
  <welcome-file-list>
    <welcome-file>index.html</welcome-file>
    <welcome-file>index.htm</welcome-file>
    <welcome-file>index.jsp</welcome-file>
    <welcome-file>default.html</welcome-file>
    <welcome-file>default.htm</welcome-file>
    <welcome-file>default.jsp</welcome-file>
  </welcome-file-list>
  	<servlet>
		<servlet-name>dispatcher</servlet-name>
		<servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
		<init-param>
			<param-name>contextConfigLocation</param-name>
			<param-value>/WEB-INF/spring-servlet.xml</param-value>
		</init-param>
		<load-on-startup>1</load-on-startup>
	</servlet>
	<servlet-mapping>
		<servlet-name>dispatcher</servlet-name>
		<url-pattern>/</url-pattern>
	</servlet-mapping>
	
	<absolute-ordering>
		<name>spring_web</name>
	</absolute-ordering>
</web-app>
```

:electron: **CREATE THE VIEW COMPONENTS**

```html
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<body>
	<h3>Customer List</h3>
	<c:forEach var="customer" items="${customers}">
	${customer.firstName}</br>
	${customer.lastName} </br>
	${customer.email} </br>
		<br />
		<hr />
	</c:forEach>
</body>
</html>
```