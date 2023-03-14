package com.srijeet.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.srijeet.dao.FeedbackDao;
import com.srijeet.dao.ProductDao;
import com.srijeet.model.Feedback;
import com.srijeet.model.Product;
import com.srijeet.model.product1;
@org.springframework.stereotype.Service
public class FeedService implements FeedServ {
	@Autowired
	private FeedbackDao feedback;
	@Override
	public void add(Feedback product) {
	feedback.save(product);
	
	}
	
 	
}
