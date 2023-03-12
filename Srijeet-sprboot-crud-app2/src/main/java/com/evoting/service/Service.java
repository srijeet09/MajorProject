package com.srijeet.service;

import java.util.List;

import com.srijeet.model.Product;

public interface Service {
void add(Product product);
List<Product> getAll();
void removeById(int id);
void modify(Product product);
Product getById(int id);
}
