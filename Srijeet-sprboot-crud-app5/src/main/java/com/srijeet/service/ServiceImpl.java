package com.evoting.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

<<<<<<<< HEAD:Srijeet-sprboot-crud-app2/src/main/java/com/evoting/service/ServiceImpl.java
import com.evoting.dao.ProductDao;
import com.evoting.model.Product;
========
import com.srijeet.dao.ProductDao;
import com.srijeet.model.Product;
import com.srijeet.model.product1;
>>>>>>>> c701c52b7767f4f2f2be9616d918377c784d31fb:Srijeet-sprboot-crud-app5/src/main/java/com/srijeet/service/ServiceImpl.java
@org.springframework.stereotype.Service
public class ServiceImpl implements Service {
	@Autowired
	private ProductDao productdao;
 	@Override
	public void add(Product product) {
		productdao.save(product);
		
	}

 	@Override
	public List<Product> findByAdmin(String admin) {
		Iterable<Product> itr = productdao.findByAdmin(admin);
		List<Product> lst = new ArrayList<>();
		itr.forEach(ele->lst.add(ele));
		return lst;

}
 	@Override
	public List<Product> getAll() {
		Iterable<Product> itr = productdao.findAll();
		List<Product> lst = new ArrayList<>();
		itr.forEach(ele->lst.add(ele));
		return lst;

}
 	@Override
	public void removeById(int id) {
		productdao.deleteById(id);
		
	}
 	@Override
	public void modify(Product product) {
		productdao.save(product);
		
	}
 	@Override
	public Product getById(int id) {
		 Optional<Product> opt = productdao.findById(id);
		 if(opt.isPresent()) {
			 return opt.get();
		 }
		 return null;
	}
 	@Override
	public void removeByAdmin(String id) {
		productdao.deleteByAdmin(id);
		
	}
 	
}
