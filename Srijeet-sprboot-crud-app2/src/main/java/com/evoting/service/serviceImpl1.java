package com.evoting.service;


	

	import java.util.ArrayList;
	import java.util.List;
	import java.util.Optional;

	import org.springframework.beans.factory.annotation.Autowired;

import com.evoting.dao.ProductDao;
import com.evoting.dao.ProductDao1;
import com.evoting.model.product1;
	@org.springframework.stereotype.Service
	public class serviceImpl1 implements Service1 {
		@Autowired
		private ProductDao1 productDao;
	 	
		@Override
		public void add(product1 product) {
			productDao.save(product);
		}

	 	@Override
		public List<product1> getAll() {
			Iterable<product1> itr = productDao.findAll();
			List<product1> lst = new ArrayList<>();
			itr.forEach(ele->lst.add(ele));
			return lst;

	}
	 	@Override
		public void removeById(int id) {
			productDao.deleteById(id);
			
		}
	 	@Override
		public void modify(product1 product) {
			productDao.save(product);
			
		}
	 	@Override
		public product1 getById(int id) {
			 Optional<product1> opt = productDao.findById(id);
			 if(opt.isPresent()) {
				 return opt.get();
			 }
			 return null;
		}
	}


