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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Voting.model.Candidates;
import com.Voting.service.VoterService;

@RestController
public class VoterController {

@Autowired
private VoterService serv;

@CrossOrigin
@PostMapping(value= {"/product"})
	public String productAdd(@RequestBody Candidates candidates) {
	serv.add(candidates);
	return "success";
	}
@CrossOrigin
@GetMapping(value= {"/product"})
public List<Candidates> getall() {
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
public String productupdate(@RequestBody Candidates candidates) {
serv.modify(candidates);
return "success";
}
@CrossOrigin
@GetMapping(value= {"/product/{id}"})
public Candidates get(@PathVariable int id) {
return serv.getById(id);

}

@CrossOrigin
@PostMapping(value= {"/product0"})
public List<Candidates> getall(@RequestBody Candidates candidates ) {
return serv.findByAdmin(candidates.getAdmin());

}
@CrossOrigin
@PostMapping(value= {"/product/{admin}"})
public List<Candidates> getall(@PathVariable String admin ) {
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