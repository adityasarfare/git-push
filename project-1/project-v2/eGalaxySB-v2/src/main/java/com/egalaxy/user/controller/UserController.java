package com.egalaxy.user.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

import com.egalaxy.exception.ResourceNotFoundException;
import com.egalaxy.user.entity.User;
import com.egalaxy.user.service.UserService;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:4201"})
@RequestMapping(value = "/api")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping(value = "/users")
	public List<User> getUsers(){
		return userService.getAllUsers();
	}
	
	@GetMapping(value = "/users/{id}")
	  public ResponseEntity<User> getUserById(@PathVariable(value = "id") int userId)
	      throws ResourceNotFoundException {
	    User user = userService.getUserById(userId)
	        .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));
	    return ResponseEntity.ok().body(user);
	}

	@PostMapping(value = "/users")
	public void addUser(@RequestBody User user) {
		userService.addUser(user);
	}
	
	@PutMapping(value = "/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable(value = "id") int userId,
	       @RequestBody User userDetails) throws ResourceNotFoundException {
	    User user = userService.getUserById(userId)
	        .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));
	
	    user.setUserId(userDetails.getUserId());
	    user.setUserName(userDetails.getUserName());
	    user.setUserPassword(userDetails.getUserPassword());
	    user.setUserDob(userDetails.getUserDob());
	    user.setUserGender(userDetails.getUserGender());
	    final User updatedUser = userService.addUser(user);
	    return ResponseEntity.ok(updatedUser);
	  }
	
	
	@DeleteMapping(value= "/users")
	public void deleteUsers() {
		userService.deleteAllUsers();
	}
	


	  @DeleteMapping("/users/{id}")
	  public Map<String, Boolean> deleteUser(@PathVariable(value = "id") int userId)
	      throws ResourceNotFoundException {
	    User user = userService.getUserById(userId)
	        .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));

	    userService.deleteUser(user);
	    Map<String, Boolean> response = new HashMap<>();
	    response.put("deleted", Boolean.TRUE);
	    return response;
	  }
	}


