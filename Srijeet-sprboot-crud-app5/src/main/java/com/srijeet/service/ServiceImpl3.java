package com.srijeet.service;

	import java.util.ArrayList;
	import java.util.List;
	import java.util.Optional;
	import org.springframework.beans.factory.annotation.Autowired;

import com.srijeet.dao.ProductDao;
import com.srijeet.dao.ProductDao3;
import com.srijeet.model.Product3;
import com.srijeet.model.product1;
	
	
	@org.springframework.stereotype.Service
	public class ServiceImpl3 implements Service3 {
		@Autowired
		private ProductDao3 productdao;
	 	
		@Override
		public void add(Product3 product) {
			productdao.save(product);
			
		}

	 	@Override
		public List<Product3> getAll() {
			Iterable<Product3> itr = productdao.findAll();
			List<Product3> lst = new ArrayList<>();
			itr.forEach(ele->lst.add(ele));
			return lst;

	}
	 	@Override
		public void removeById(int id) {
			productdao.deleteById(id);
			
		}
	 	@Override
		public void modify(Product3 product) {
			productdao.save(product);
			
		}
	 	@Override
		public Product3 getById(int id) {
			 Optional<Product3> opt = productdao.findById(id);
			 if(opt.isPresent()) {
				 return opt.get();
			 }
			 return null;
		}
	 	
	 	@Override
		public void removeByAdmin(String id) {
			productdao.deleteByName(id);
			
		}

		@Override
		public Product3 getByAdmin(String admin) {
			return productdao.findByName(admin);
		}

	
	 	
	}


