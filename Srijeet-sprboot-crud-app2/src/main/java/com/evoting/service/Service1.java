package com.evoting.service;

import java.util.List;

import com.evoting.model.product1;
public interface Service1 {
void add(product1 product);
List<product1> getAll();
void removeById(int id);
void modify(product1 product);
product1 getById(int id);
}

