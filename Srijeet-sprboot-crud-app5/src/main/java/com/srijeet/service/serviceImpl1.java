package com.srijeet.service;


	

	import java.util.ArrayList;
	import java.util.List;
	import java.util.Optional;

	import org.springframework.beans.factory.annotation.Autowired;

import com.srijeet.dao.ProductDao;
import com.srijeet.dao.ProductDao1;
import com.srijeet.model.product1;
	@org.springframework.stereotype.Service
	public class serviceImpl1 implements Service1 {
		@Autowired
		private ProductDao1 productDao;
	 	
		@Override
		public void add(product1 product) {
			productDao.save(product);
		}

	 	@Override
		public List<product1> findByAdmin(String a) {
			Iterable<product1> itr = productDao.findByAdmin(a);
			List<product1> lst = new ArrayList<>();
			itr.forEach(ele->lst.add(ele));
			return lst;
}
		
		
	 	@Override
		public void removeById(int id,String admin) {
			productDao.deleteById(id,admin);
			
		}
	 	@Override
		public void removeById1(int id) {
			productDao.deleteById(id);
			
		}
	 	
	 	@Override
		public void removeByAdmin(String id) {
			productDao.deleteByAdmin(id);
			
		}
	 	@Override
		public void modify(product1 product) {
			productDao.save(product);
			
		}
	 	@Override
		public product1 getById(int id,String admin) {
			 Optional<product1> opt = productDao.findById(id,admin);
			 if(opt.isPresent()) {
				 return opt.get();
			 }
			 return null;
		}
	}


