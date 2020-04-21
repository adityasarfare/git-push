package com.egalaxy.cart.controller;

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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egalaxy.cart.entity.Cart;
import com.egalaxy.cart.entity.Order;
import com.egalaxy.cart.service.CartService;
import com.egalaxy.exception.ResourceNotFoundException;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:4201"})
@RequestMapping(value = "/api")
public class CartController {
	
	@Autowired
	private CartService cartService;
	
	
	@GetMapping(value = "/carts")
	public List<Cart> getUsers(){
		return cartService.getAllCarts();
	}
	
	@GetMapping(value = "/orders")
	public List<Order> getOrders(){
		return cartService.getAllOrders();
	}
	
	@PostMapping(value = "/carts")
	public void addCart(@RequestBody Cart cart) {
		cartService.addCart(cart);
	}

	@PostMapping(value = "/orders")
	public void addOrder(@RequestBody Order order) {
		cartService.addOrder(order);
	}
	
	@GetMapping(value = "/carts/{id}")
	  public ResponseEntity<Cart> getCartById(@PathVariable(value = "id") int cartId)
	      throws ResourceNotFoundException {
	    Cart cart = cartService.getCartById(cartId)
	        .orElseThrow(() -> new ResourceNotFoundException("Cart not found for this id :: " + cartId));
	    return ResponseEntity.ok().body(cart);
	}
	
	  @DeleteMapping("/carts/{id}")
	  public Map<String, Boolean> deleteCart(@PathVariable(value = "id") int cartId)
	      throws ResourceNotFoundException {
	    Cart cart = cartService.getCartById(cartId)
	        .orElseThrow(() -> new ResourceNotFoundException("Cart not found for this id :: " + cartId));

	    cartService.deleteCart(cart);
	    Map<String, Boolean> response = new HashMap<>();
	    response.put("deleted", Boolean.TRUE);
	    return response;
	  }
	  
}