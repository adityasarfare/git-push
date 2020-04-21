package com.egalaxy.cart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.egalaxy.cart.entity.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {

}
