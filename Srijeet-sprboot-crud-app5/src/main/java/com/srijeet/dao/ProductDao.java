package com.evoting.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

<<<<<<<< HEAD:Srijeet-sprboot-crud-app2/src/main/java/com/evoting/dao/ProductDao.java
import com.evoting.model.Product;
========
import com.srijeet.model.Product;
import com.srijeet.model.product1;
>>>>>>>> c701c52b7767f4f2f2be9616d918377c784d31fb:Srijeet-sprboot-crud-app5/src/main/java/com/srijeet/dao/ProductDao.java
@Repository
public interface ProductDao extends JpaRepository<Product, Integer> {
public List<Product> findByAdmin(String Name);
@Modifying
@Transactional
@Query(value="delete from Product c where c.admin = ?1")
void deleteByAdmin(String Admin);
}
