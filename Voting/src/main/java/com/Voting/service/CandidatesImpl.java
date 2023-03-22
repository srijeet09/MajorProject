package com.Voting.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.Voting.dao.CandidatesDao;
import com.Voting.model.Candidates;
import com.Voting.model.Voters;
@org.springframework.stereotype.Service
public class CandidatesImpl implements CandidateService {
	@Autowired
	private CandidatesDao productdao;
 	@Override
	public void add(Candidates candidates) {
		productdao.save(candidates);
		
	}

 	@Override
	public List<Candidates> findByAdmin(String admin) {
		Iterable<Candidates> itr = productdao.findByAdmin(admin);
		List<Candidates> lst = new ArrayList<>();
		itr.forEach(ele->lst.add(ele));
		return lst;

}
 	@Override
	public List<Candidates> getAll() {
		Iterable<Candidates> itr = productdao.findAll();
		List<Candidates> lst = new ArrayList<>();
		itr.forEach(ele->lst.add(ele));
		return lst;

}
 	@Override
	public void removeById(int id) {
		productdao.deleteById(id);
		
	}
 	@Override
	public void modify(Candidates candidates) {
		productdao.save(candidates);
		
	}
 	@Override
	public Candidates getById(int id) {
		 Optional<Candidates> opt = productdao.findById(id);
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
