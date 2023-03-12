package com.evoting.dao;
import java.util.List;

	import org.springframework.data.jpa.repository.JpaRepository;
	import org.springframework.data.repository.CrudRepository;
	import org.springframework.data.repository.query.Param;
	import org.springframework.stereotype.Repository;

import com.evoting.model.Product3;

@Repository
public interface ProductDao3 extends JpaRepository<Product3,Integer> {
	

}