package com.demo.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.UserDAO;
import com.demo.entity.User;
@Service
public class UserServiceImpl implements UserService {
	@Autowired
	UserDAO userDAO;
    @Override
	public List<User> getAllUsers() {
        return userDAO.findAll();
    }
    @Override
	public User addUser(User user) {
        return userDAO.save(user);
    }
    @Override
	public Optional<User> getUserById(int id) {
    	return userDAO.findById(id);
    }
    @Override
	public User updateUser(User user) {
       return userDAO.save(user);
    }
    @Override
	public void deleteUserById(int id) {   
    	userDAO.deleteById(id);
    }
    @Override
	public void deleteAllUsers() {
    	userDAO.deleteAll();
    }
}
