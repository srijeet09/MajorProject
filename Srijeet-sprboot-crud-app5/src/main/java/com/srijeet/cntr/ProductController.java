package com.evoting.cntr;

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

import com.evoting.model.Product;
import com.evoting.service.Service;

@RestController
public class ProductController {

@Autowired
private Service serv;

@CrossOrigin
@PostMapping(value= {"/product"})
	public String productAdd(@RequestBody Product product) {
	serv.add(product);
	return "success";
	}
@CrossOrigin
@GetMapping(value= {"/product"})
public List<Product> getall() {
return serv.getAll();

}
@CrossOrigin
@DeleteMapping(value= {"/product"})
public String productdelete1(@RequestParam int id) {
serv.removeById(id);
return "success";
}
@CrossOrigin
@PutMapping(value= {"/product"})
public String productupdate(@RequestBody Product product) {
serv.modify(product);
return "success";
}
@CrossOrigin
@GetMapping(value= {"/product/{id}"})
public Product get(@PathVariable int id) {
return serv.getById(id);

}

@CrossOrigin
@PostMapping(value= {"/product0"})
public List<Product> getall(@RequestBody Product product ) {
return serv.findByAdmin(product.getAdmin());

}
@CrossOrigin
@PostMapping(value= {"/product/{admin}"})
public List<Product> getall(@PathVariable String admin ) {
System.out.println(admin);
return serv.findByAdmin(admin);

}
@CrossOrigin
@DeleteMapping(value= {"/product0/{admin}"})
public String productdelete1(@PathVariable String admin) {
serv.removeByAdmin(admin);
return "success";
}
}