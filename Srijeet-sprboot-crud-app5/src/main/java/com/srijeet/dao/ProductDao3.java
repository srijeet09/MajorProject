package com.srijeet.dao;


	

	import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
	import org.springframework.data.repository.query.Param;
	import org.springframework.stereotype.Repository;


import com.srijeet.model.Product3;

	@Repository
	public interface ProductDao3 extends JpaRepository<Product3,Integer> {
		@Modifying
		@Transactional
		@Query(value="delete from Product3 c where c.name = ?1")
		void deleteByName(String Name);
		Product3 findByName(String Name);
	}