package com.Voting.dao;


	

	import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.Voting.model.Candidates;
import com.Voting.model.Voters;
@Repository
	public interface VotersDao extends JpaRepository<Voters,Integer> {
		public List<Voters> findByAdmin(String Name);
		@Modifying
		@Transactional
		@Query(value="delete from Voters c where c.admin = ?1")
		void deleteByAdmin(String Admin);
		
		@Modifying
		@Transactional
		@Query(value="delete from Voters c where c.id = ?1 and c.admin = ?2")
		void deleteById(int id,String admin);
		
		@Transactional
		@Query("SELECT u FROM Voters u WHERE u.id = ?1 and u.admin = ?2")
		Optional<Voters> findById(int id,String admin);
}

