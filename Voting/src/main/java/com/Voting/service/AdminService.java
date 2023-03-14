
	package com.Voting.service;

	import java.util.List;

import com.Voting.model.Admin;
import com.Voting.model.Voter;
	

	public interface AdminService {
	void add(Admin product);
	List<Admin> getAll();
	void removeById(int id);
	void modify(Admin product);
	Admin getById(int id);
	void removeByAdmin(String admin);
	Admin getByAdmin(String admin);	
	}



