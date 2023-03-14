package com.Voting.service;


	

	import java.util.ArrayList;
	import java.util.List;
	import java.util.Optional;

	import org.springframework.beans.factory.annotation.Autowired;

import com.Voting.dao.CandidatesDao;
import com.Voting.dao.VoterDao;
import com.Voting.model.Voter;
	@org.springframework.stereotype.Service
	public class VotersServiceImpl implements CandidatesService {
		@Autowired
		private VoterDao productDao;
	 	
		@Override
		public void add(Voter product) {
			productDao.save(product);
		}

	 	@Override
		public List<Voter> findByAdmin(String a) {
			Iterable<Voter> itr = productDao.findByAdmin(a);
			List<Voter> lst = new ArrayList<>();
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
		public void modify(Voter product) {
			productDao.save(product);
			
		}
	 	@Override
		public Voter getById(int id,String admin) {
			 Optional<Voter> opt = productDao.findById(id,admin);
			 if(opt.isPresent()) {
				 return opt.get();
			 }
			 return null;
		}
	}


