


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

import com.Voting.model.Voter;
import com.Voting.service.CandidatesService;

	@RestController
	public class CandidatesController {
	int a;
	String admin;
	@Autowired
	private CandidatesService server;

	@CrossOrigin
	@PostMapping(value= {"/product1"})
	public String productadd12(@RequestBody Voter a) {
	server.add(a);
	return "success";
	}
	
	@CrossOrigin
	@PostMapping(value= {"/product11"})
	public List<Voter> productget(@RequestBody Voter a){
	return server.findByAdmin(a.getAdmin());
	}
	
	@CrossOrigin
	@DeleteMapping(value= {"/product1"})
	public String productdelete12() {
	server.removeById(a,admin);
	return "success";
	}
	
	@CrossOrigin
	@PostMapping(value= {"/product12"})
	public String productdelete13(@RequestBody Voter a) {
	server.removeById(a.getId(),a.getAdmin());
	return "success";
	}
	
	@CrossOrigin
	@DeleteMapping(value= {"/product10/{admin}"})
	public String productdelete1(@PathVariable String admin) {
	server.removeByAdmin(admin);
	return "success";
	}

	@CrossOrigin
	@PostMapping(value= {"/product10"})
	public Voter get11(@RequestBody Voter pro) {
		a = pro.getId();
		admin= pro.getAdmin();
	return server.getById(pro.getId(),pro.getAdmin());

	}
	
	@CrossOrigin
	@DeleteMapping(value= {"/product1/{id}"})
	public String productdelete12(@PathVariable int id) {
	server.removeById1(id);
	return "success";
	}
}
