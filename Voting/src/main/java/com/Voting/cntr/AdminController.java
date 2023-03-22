package com.Voting.cntr;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Voting.model.Candidates;
import com.Voting.model.Admin;
import com.Voting.model.Voters;
import com.Voting.service.VotersService;
import com.Voting.service.AdminService;
@RestController
public class AdminController {
	@Autowired
	private AdminService server;

@CrossOrigin
@PostMapping(value= {"/admin3"})
	public String productAdd11(@RequestBody Admin product) {
	server.add(product);
	return "success";
	}

	@CrossOrigin
	@GetMapping(value= {"/admin3/{id}"})
	public Admin get114(@PathVariable int id) {
	return server.getById(id);

	}
	@CrossOrigin
	@DeleteMapping(value= {"/admin3/{name}"})
	public String productdelete1(@PathVariable String name) {
	server.removeByAdmin(name);
	return "success";
	}
	@CrossOrigin
	@PostMapping(value= {"/admin30/{admin}"})
	public Admin get114(@PathVariable String admin) {
	return server.getByAdmin(admin);

	}
}
