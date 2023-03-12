
package com.evoting.service;

import java.util.List;

import com.evoting.model.Product3;
import com.evoting.model.product1;
public interface Service3 {
	void add(Product3 product);
	List<Product3> getAll();
	void removeById(int id);
	void modify(Product3 product);
	Product3 getById(int id);
}



