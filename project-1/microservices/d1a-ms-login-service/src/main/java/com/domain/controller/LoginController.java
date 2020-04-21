package com.domain.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.domain.model.LoginUser;

@RestController
@RequestMapping("/api")
public class LoginController {
	List loginUserList = new ArrayList<LoginUser>();
	
	public LoginController() {
		loginUserList.add(new LoginUser("user1", "pass1"));
		loginUserList.add(new LoginUser("user1", "pass1"));
	}
	//authenticateUser()
	
	@GetMapping("/getUsers")
	public List getUsers() {	
		return loginUserList;
	}
}
