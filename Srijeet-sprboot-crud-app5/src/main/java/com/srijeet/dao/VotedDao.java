package com.srijeet.dao;


	

	import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.srijeet.model.Product;
import com.srijeet.model.Voted;
import com.srijeet.model.product1;
@Repository
	public interface VotedDao extends JpaRepository<Voted,Integer> {
		public List<Voted> findByAdmin(String Name);
		
		
}

