package com.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.demo.entity.User;
import com.demo.service.UserService;
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserService userService;
	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public List<User> getAllUsers() {
        return this.userService.getAllUsers();
    }
	@RequestMapping(value = "/adduser", method = RequestMethod.POST, 
			consumes = MediaType.APPLICATION_JSON_VALUE, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public User addUser(@RequestBody User user) {
        return this.userService.addUser(user);
    }
	@RequestMapping(value = "/updateuser", method = RequestMethod.PUT, 
			consumes = MediaType.APPLICATION_JSON_VALUE, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	 public User updateUser(@RequestBody User user) {
	        return this.userService.updateUser(user);
	    }
	 @RequestMapping(value="/{id}", method = RequestMethod.GET
			 )
	 public Optional<User> getUser(@PathVariable int id) {
	        return this.userService.getUserById(id);
	    }
	 
	 //GETTING THE USER DETAILS BY POSTING THE USERID
	 @RequestMapping(value="/userid", method = RequestMethod.POST,
			 consumes = MediaType.APPLICATION_JSON_VALUE, 
				produces = MediaType.APPLICATION_JSON_VALUE)
	 public Optional<User> getUserUsingPost(@RequestBody User user) {
	        return this.userService.getUserById(user.getId());
	    }
	 
	 public void deleteAllUsers() {
	        this.userService.deleteAllUsers();
	    }
	 public void deleteUser( int id) {
	        this.userService.deleteUserById(id);
	    }
}
