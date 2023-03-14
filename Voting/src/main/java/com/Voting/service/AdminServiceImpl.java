package com.Voting.service;

	import java.util.ArrayList;
	import java.util.List;
	import java.util.Optional;
	import org.springframework.beans.factory.annotation.Autowired;

import com.Voting.dao.CandidatesDao;
import com.Voting.dao.AdminDao;
import com.Voting.model.Admin;
import com.Voting.model.Voter;
	
	
	@org.springframework.stereotype.Service
	public class AdminServiceImpl implements AdminService {
		@Autowired
		private AdminDao productdao;
	 	
		@Override
		public void add(Admin product) {
			productdao.save(product);
			
		}

	 	@Override
		public List<Admin> getAll() {
			Iterable<Admin> itr = productdao.findAll();
			List<Admin> lst = new ArrayList<>();
			itr.forEach(ele->lst.add(ele));
			return lst;

	}
	 	@Override
		public void removeById(int id) {
			productdao.deleteById(id);
			
		}
	 	@Override
		public void modify(Admin product) {
			productdao.save(product);
			
		}
	 	@Override
		public Admin getById(int id) {
			 Optional<Admin> opt = productdao.findById(id);
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
		public Admin getByAdmin(String admin) {
			return productdao.findByName(admin);
		}

	
	 	
	}


