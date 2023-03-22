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

import com.Voting.model.Feedback;
import com.Voting.model.Candidates;
import com.Voting.service.FeedServ;
import com.Voting.service.CandidateService;

@RestController
public class FeedbackController {

@Autowired
private FeedServ serv;

@CrossOrigin
@PostMapping(value= {"/Feedback"})
	public String productAdd(@RequestBody Feedback product) {
	System.out.println(product);
	serv.add(product);
	return "success";
	}

}