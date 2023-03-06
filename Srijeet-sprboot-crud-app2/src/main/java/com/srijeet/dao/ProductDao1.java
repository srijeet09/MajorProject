package com.srijeet.dao;


	

	import java.util.List;

	import org.springframework.data.jpa.repository.JpaRepository;
	import org.springframework.data.repository.CrudRepository;
	import org.springframework.data.repository.query.Param;
	import org.springframework.stereotype.Repository;

	import com.srijeet.model.Product;
import com.srijeet.model.product1;
	@Repository
	public interface ProductDao1 extends JpaRepository<product1,Integer> {
	

	}

