


	package com.srijeet.cntr;

	import java.util.List;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.web.bind.annotation.CrossOrigin;
	import org.springframework.web.bind.annotation.DeleteMapping;
	import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.PathVariable;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.PutMapping;
	import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RequestParam;
	import org.springframework.web.bind.annotation.RestController;


	import com.srijeet.model.product1;
	import com.srijeet.service.Service1;

	@RestController
	public class ProductController1 {
	int a;
	@Autowired
	private Service1 server;

	@CrossOrigin
	@PostMapping(value= {"/product1"})
	public String productadd12(@RequestBody product1 a) {
	server.add(a);
	return "success";
	}
	
	@CrossOrigin
	@GetMapping(value= {"/product1"})
	public List<product1> productget() {
	return server.getAll();
	
	}
	
	@CrossOrigin
	@DeleteMapping(value= {"/product1"})
	public String productdelete12() {
	server.removeById(a);
	return "success";
	}

	@CrossOrigin
	@GetMapping(value= {"/product1/{id}"})
	public product1 get11(@PathVariable int id) {
		a = id;
	return server.getById(id);

	}
	
	@CrossOrigin
	@DeleteMapping(value= {"/product1/{id}"})
	public String productdelete12(@PathVariable int id) {
	server.removeById(id);
	return "success";
	}
}
