package com.srijeet.service;

import java.util.List;

import com.srijeet.model.product1;



public interface Service1 {
void add(product1 product);
List<product1> findByAdmin(String name);
void removeById(int id);
void modify(product1 product);
product1 getById(int id);
	}

