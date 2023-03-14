package com.Voting.dao;


	

	import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
	import org.springframework.data.repository.query.Param;
	import org.springframework.stereotype.Repository;

import com.Voting.model.Admin;

	@Repository
	public interface AdminDao extends JpaRepository<Admin,Integer> {
		@Modifying
		@Transactional
		@Query(value="delete from Admin c where c.name = ?1")
		void deleteByName(String Name);
		Admin findByName(String Name);
	}