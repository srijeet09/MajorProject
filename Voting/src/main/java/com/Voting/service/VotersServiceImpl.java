package com.Voting.service;


	

	import java.util.ArrayList;
	import java.util.List;
	import java.util.Optional;

	import org.springframework.beans.factory.annotation.Autowired;

import com.Voting.dao.CandidatesDao;
import com.Voting.dao.VotersDao;
import com.Voting.model.Voters;
	@org.springframework.stereotype.Service
	public class VotersServiceImpl implements VotersService {
		@Autowired
		private VotersDao productDao;
	 	
		@Override
		public void add(Voters product) {
			productDao.save(product);
		}

	 	@Override
		public List<Voters> findByAdmin(String a) {
			Iterable<Voters> itr = productDao.findByAdmin(a);
			List<Voters> lst = new ArrayList<>();
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
		public void modify(Voters product) {
			productDao.save(product);
			
		}
	 	@Override
		public Voters getById(int id,String admin) {
			 Optional<Voters> opt = productDao.findById(id,admin);
			 if(opt.isPresent()) {
				 return opt.get();
			 }
			 return null;
		}
	}


