package com.Voting.service;


	

	import java.util.ArrayList;
	import java.util.List;
	import java.util.Optional;

	import org.springframework.beans.factory.annotation.Autowired;

import com.Voting.dao.CandidatesDao;
import com.Voting.dao.VotersDao;
import com.Voting.dao.VotedDao;
import com.Voting.model.Voted;
import com.Voting.model.Voters;
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
