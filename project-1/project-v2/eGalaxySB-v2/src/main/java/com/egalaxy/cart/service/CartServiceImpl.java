package com.egalaxy.cart.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egalaxy.cart.entity.Cart;
import com.egalaxy.cart.entity.Order;
import com.egalaxy.cart.repository.CartRepository;
import com.egalaxy.cart.repository.OrderRepository;

@Service
public class CartServiceImpl implements CartService {
	
	@Autowired
	private CartRepository cartRepository;
	
	@Autowired
	private OrderRepository orderRepository;

	@Override
	@Transactional
	public List<Cart> getAllCarts() {
		return cartRepository.findAll();
	}

	@Override
	@Transactional
	public Cart addCart(Cart cart) {
		return cartRepository.save(cart);
	}

	@Override
	@Transactional
	public Optional<Cart> getCartById(int cartId) {
		return cartRepository.findById(cartId);
	}

	@Override
	@Transactional
	public Map<String, Boolean> deleteCart(Cart cart) {
		 cartRepository.delete(cart);
		 return null;
	}

	@Override
	@Transactional
	public Order addOrder(Order order) {
		return orderRepository.save(order);
	}

	@Override
	public List<Order> getAllOrders() {
		return orderRepository.findAll();
	}



}
