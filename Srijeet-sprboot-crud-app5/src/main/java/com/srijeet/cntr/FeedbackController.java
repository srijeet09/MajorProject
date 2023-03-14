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

import com.srijeet.model.Feedback;
import com.srijeet.model.Product;
import com.srijeet.service.FeedServ;
import com.srijeet.service.Service;

@RestController
public class FeedbackController {

@Autowired
private FeedServ serv;

@CrossOrigin
@PostMapping(value= {"/Feedback"})
	public String productAdd(@RequestBody Feedback product) {
	serv.add(product);
	return "success";
	}

}