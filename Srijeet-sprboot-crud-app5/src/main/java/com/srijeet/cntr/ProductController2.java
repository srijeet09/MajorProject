package com.evoting.cntr;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.evoting.model.Product;
import com.evoting.model.Product3;
import com.evoting.model.product1;
import com.evoting.service.Service1;
import com.evoting.service.Service3;
@RestController
public class ProductController2 {
	@Autowired
	private Service3 server;

@CrossOrigin
@PostMapping(value= {"/product3"})
	public String productAdd11(@RequestBody Product3 product) {
	server.add(product);
	return "success";
}

	@CrossOrigin
	@GetMapping(value= {"/product3/{id}"})
	public Product3 get114(@PathVariable int id) {
	return server.getById(id);
<<<<<<<< HEAD:Srijeet-sprboot-crud-app2/src/main/java/com/evoting/cntr/ProductController2.java
}
========

	}
	@CrossOrigin
	@DeleteMapping(value= {"/product3/{name}"})
	public String productdelete1(@PathVariable String name) {
	server.removeByAdmin(name);
	return "success";
	}
>>>>>>>> c701c52b7767f4f2f2be9616d918377c784d31fb:Srijeet-sprboot-crud-app5/src/main/java/com/srijeet/cntr/ProductController2.java
}
