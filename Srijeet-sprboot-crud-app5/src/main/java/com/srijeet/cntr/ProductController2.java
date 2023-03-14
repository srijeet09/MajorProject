package com.srijeet.cntr;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.srijeet.model.Product;
import com.srijeet.model.Product3;
import com.srijeet.model.product1;
import com.srijeet.service.Service1;
import com.srijeet.service.Service3;
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

	}
	@CrossOrigin
	@DeleteMapping(value= {"/product3/{name}"})
	public String productdelete1(@PathVariable String name) {
	server.removeByAdmin(name);
	return "success";
	}
	@CrossOrigin
	@PostMapping(value= {"/product30/{admin}"})
	public Product3 get114(@PathVariable String admin) {
	return server.getByAdmin(admin);

	}
}
