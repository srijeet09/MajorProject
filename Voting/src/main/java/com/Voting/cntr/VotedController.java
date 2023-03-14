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

import com.Voting.model.Voted;
import com.Voting.model.Voter;
import com.Voting.service.CandidatesService;
import com.Voting.service.VotedServ;

	@RestController
	public class VotedController {
	@Autowired
	private VotedServ server;

	@CrossOrigin
	@PostMapping(value= {"/Voted"})
	public String productadd12(@RequestBody Voted a) {
	server.add(a);
	return "success";
	}
	
	@CrossOrigin
	@PostMapping(value= {"/Voted1/{admin}"})
	public List<Voted> productget(@PathVariable String admin){
	System.out.println(server.findByAdmin(admin));
	System.out.println(server.findByAdmin(admin).toString());
		return server.findByAdmin(admin);
	}
	
	
	
}
