package com.egalaxy.user.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.egalaxy.user.entity.User;

public interface UserService {
	
	List<User> getAllUsers();
	Optional<User> getUserById(int userId);
	public void deleteAllUsers();
	public void updateUser(User user);
	public User addUser(User user);
	Map<String, Boolean> deleteUser(User user);

}
