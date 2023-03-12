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
import com.srijeet.model.product1;
@Repository
	public interface ProductDao1 extends JpaRepository<product1,Integer> {
		public List<product1> findByAdmin(String Name);
		@Modifying
		@Transactional
		@Query(value="delete from product1 c where c.admin = ?1")
		void deleteByAdmin(String Admin);
		
		@Modifying
		@Transactional
		@Query(value="delete from product1 c where c.id = ?1 and c.admin = ?2")
		void deleteById(int id,String admin);
		
		@Transactional
		@Query("SELECT u FROM product1 u WHERE u.id = ?1 and u.admin = ?2")
		Optional<product1> findById(int id,String admin);
}

