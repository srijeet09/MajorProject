
	package com.srijeet.service;

	import java.util.List;

import com.srijeet.model.Product3;
import com.srijeet.model.product1;
	

	public interface Service3 {
	void add(Product3 product);
	List<Product3> getAll();
	void removeById(int id);
	void modify(Product3 product);
	Product3 getById(int id);
	void removeByAdmin(String admin);
		}



