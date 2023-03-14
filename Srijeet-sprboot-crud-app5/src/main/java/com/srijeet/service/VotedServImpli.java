package com.srijeet.service;


	

	import java.util.ArrayList;
	import java.util.List;
	import java.util.Optional;

	import org.springframework.beans.factory.annotation.Autowired;

import com.srijeet.dao.ProductDao;
import com.srijeet.dao.ProductDao1;
import com.srijeet.dao.VotedDao;
import com.srijeet.model.Voted;
import com.srijeet.model.product1;
	@org.springframework.stereotype.Service
	public class VotedServImpli implements VotedServ {
		@Autowired
		private VotedDao productDao;
	 	
		@Override
		public void add(Voted product) {
			productDao.save(product);
		}

	 	@Override
		public List<Voted> findByAdmin(String a) {
			Iterable<Voted> itr = productDao.findByAdmin(a);
			List<Voted> lst = new ArrayList<>();
			itr.forEach(ele->lst.add(ele));
			return lst;
}
		
	}
