package com.evoting.service;

import java.util.List;

import com.evoting.model.Product;

public interface Service {
void add(Product product);
List<Product> findByAdmin(String admin);
void removeById(int id);
void modify(Product product);
Product getById(int id);
List<Product> getAll();
void removeByAdmin(String admin);
}