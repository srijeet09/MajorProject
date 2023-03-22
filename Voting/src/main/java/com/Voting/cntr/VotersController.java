


	package com.Voting.cntr;

	import java.util.List;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.web.bind.annotation.CrossOrigin;
	import org.springframework.web.bind.annotation.DeleteMapping;
	import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.PathVariable;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.PutMapping;
	import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
	import org.springframework.web.bind.annotation.RestController;

import com.Voting.model.Voters;
import com.Voting.service.VotersService;
import com.Voting.service.CandidateService;
import com.Voting.service.VotersServiceImpl;

	@RestController
	public class VotersController {
	int a;
	String admin;
	@Autowired
	private 	VotersService server;

	@CrossOrigin
	@PostMapping(value= {"/voter1"})
	public String productadd12(@RequestBody Voters a) {
	server.add(a);
	return "success";
	}
	
	@CrossOrigin
	@PostMapping(value= {"/voter11"})
	public List<Voters> productget(@RequestBody Voters a){
	return server.findByAdmin(a.getAdmin());
	}
	
	@CrossOrigin
	@DeleteMapping(value= {"/voter1"})
	public String productdelete12() {
	server.removeById(a,admin);
	return "success";
	}
	
	@CrossOrigin
	@PostMapping(value= {"/voter12"})
	public String productdelete13(@RequestBody Voters a) {
	server.removeById(a.getId(),a.getAdmin());
	return "success";
	}
	
	@CrossOrigin
	@DeleteMapping(value= {"/voter10/{admin}"})
	public String productdelete1(@PathVariable String admin) {
	server.removeByAdmin(admin);
	return "success";
	}

	@CrossOrigin
	@PostMapping(value= {"/voter10"})
	public Voters get11(@RequestBody Voters pro) {
		a = pro.getId();
		admin= pro.getAdmin();
	return server.getById(pro.getId(),pro.getAdmin());

	}
	
	@CrossOrigin
	@DeleteMapping(value= {"/voter1/{id}"})
	public String productdelete12(@PathVariable int id) {
	server.removeById1(id);
	return "success";
	}
}
